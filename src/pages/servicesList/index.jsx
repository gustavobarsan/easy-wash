import MainIMage from "./serviceImg.svg";
import Header from "../../components/header";
import ServiceCard from "../../components/serviceCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {
  MainContainer,
  ServiceImageContainer,
  ServiceImage,
  ServiceInfo,
  Title,
  Rate,
  Description,
  CartContainer,
  CartItems,
  AllContentContainer,
  CartText,
  FinalPrice,
  CardContainer,
} from "./style";

import { FaShoppingCart } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

const ServiceList = () => {
  let { id } = useParams();
  const realId = parseInt(id);
  const [services, setServices] = useState([]);
  const [user, setUser] = useState([]);
  const axios = require("axios");
  const total = JSON.parse(localStorage.getItem("cart"));
  const history = useHistory();

  const getServices = async () => {
    try {
      const res = await axios.get(
        `https://easy-wash-server.herokuapp.com/users`
      );
      const data = await res.data;
      const dataUser = data.filter((teste) => {
        return teste.id === realId;
      });
      setServices(dataUser[0].services);
      setUser(dataUser[0]);
    } catch (error) {}
  };
  useEffect(() => {
    getServices();
  }, [user]);
  return (
    <>
      <Header></Header>
      <AllContentContainer>
        <MainContainer>
          <ServiceImageContainer>
            <ServiceImage src={MainIMage}></ServiceImage>
          </ServiceImageContainer>
          <ServiceInfo>
            <Title>{user.company}</Title>
            <Rate>
              4,5 <BsStarFill color="yellow" size="20px" />
            </Rate>
            <Description>Pedido minimo de 10 itens</Description>
          </ServiceInfo>
          <CardContainer>
            {services.map((services, index) => (
              <ServiceCard
                title={services.title}
                price={services.price}
                description={services.description}
                service={services}
                key={index}
              />
            ))}
          </CardContainer>
        </MainContainer>
        <CartContainer>
          <CartItems>
            <FaShoppingCart color="white" size={"20px"}></FaShoppingCart>
          </CartItems>
          <CartItems>
            <CartText onClick={() => history.push("/checkout")}>
              Ver Carrinho
            </CartText>
          </CartItems>
          <CartItems>
            <FinalPrice>
              R${" "}
              {total
                ? Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "BRL",
                  }).format(total.total)
                : "00,00"}
            </FinalPrice>
          </CartItems>
        </CartContainer>
      </AllContentContainer>
    </>
  );
};

export default ServiceList;
