import Header from "../../components/header";
import { Container, NotLogged } from "./style";

import jwt_decode from "jwt-decode";
import axios from "axios";
import { useEffect, useState } from "react";
import CartCard from "../../components/cartCard";
import DefaultButton from "../../components/sharedButton";
import { useHistory } from "react-router-dom";
import { useOpen } from "../../context/openModal";
import CheckoutPayment from "../checkoutPayment";
import {
  addListToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunk";
import { connect } from "react-redux";
import { BiMap } from "react-icons/bi";

const mapStateToProps = (state) => ({ cart: state.cart });
const mapDispatchToProps = (dispatch) => ({
  getCached: () =>
    dispatch(
      addListToCartThunk(JSON.parse(localStorage.getItem("cart"))?.products)
    ),
  removeFromCart: (id) => dispatch(removeFromCartThunk(id)),
});

const CheckoutServices = ({ cart, getCached, removeFromCart }) => {
  const { open, setOpen } = useOpen();
  const history = useHistory();
  const [addressInfo, setAddressInfo] = useState({});
  const token = localStorage.getItem("authToken");
  const decoded = token ? jwt_decode(token) : "";
  const id = decoded.sub ? decoded.sub : "";

  const getDatasFromUser = async () => {
    try {
      const response = await axios.get(
        `https://easy-wash-server.herokuapp.com/users/${id}`
      );
      setAddressInfo(response.data.address);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(cart);

  useEffect(() => {
    getCached();
    getDatasFromUser();
  }, [id]);

  const { street, number, district, city } = addressInfo;
  console.log(addressInfo);
  return (
    <>
      <Header />
      {token !== "" ? (
        <Container>
          <div className="gridContainer">
            <div className="address">
              <div className="addressInfo">
                <h3 className="infoTittle">Endereço de coleta:</h3>

                {street ? (
                  <h2>
                    <BiMap /> &nbsp;
                    {`${street}, ${number} - ${district}, ${city}`}
                  </h2>
                ) : (
                  <h1>...</h1>
                )}
              </div>
            </div>

            <div className="productsContainer">
              <div className="productTitle">Meus produtos</div>
              <div className="productsList">
                {cart && cart.products && cart.products.length > 0 ? (
                  cart.products.map((product, index) => (
                    <CartCard
                      key={index}
                      title={product.title}
                      value={product.price}
                      id={product.id}
                      _func={removeFromCart}
                    />
                  ))
                ) : (
                  <div className="emptyCart">
                    <span>Carrinho está vazio</span>
                    <DefaultButton
                      name="Voltar"
                      _func={() => history.goBack()}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="footer">
              <span className="total">
                <span>Total: </span>
                <span>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(
                    cart && cart.products && cart.products.length > 0
                      ? cart.total
                      : 0
                  )}
                </span>
              </span>
              {cart && cart.products && cart.products.length > 0 && (
                <DefaultButton
                  name="Finalizar Pagamento"
                  width="15rem"
                  height="3.5rem"
                  _func={() => setOpen(true)}
                />
              )}
            </div>
            {open && <CheckoutPayment />}
          </div>
        </Container>
      ) : (
        <NotLogged>
          <span>Você não tem acesso a esta página!</span>
          <DefaultButton
            name="Voltar ao Inicio"
            _func={() => history.push("/")}
          />
        </NotLogged>
      )}
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutServices);
