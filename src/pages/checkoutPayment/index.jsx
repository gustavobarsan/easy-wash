import SimpleModal from "../../components/modalBase";
import { Container } from "./style";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import DefaultButton from "../../components/sharedButton";
import { useState } from "react";
import cash from "./images/cash.svg";
import creditCard from "./images/creditCard.svg";
import paypal from "./images/paypal.svg";
import { useDispatch } from "react-redux";
import { resetCartThunk } from "../../store/modules/cart/thunk";
import { useHistory } from "react-router-dom";
import { useOpen } from "../../context/openModal";

const CheckoutPayment = () => {
  const [value, setValue] = useState("paypal");
  const [finish, setFinish] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { setOpen } = useOpen();
  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  return (
    <SimpleModal>
      <Container>
        <h1>Métodos de Pagamento</h1>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="payment"
            name="payment"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="paypal"
              control={<Radio color="default" />}
              label={<img src={paypal} alt="PayPal" />}
            />
            <FormControlLabel
              value="creditCard"
              control={<Radio color="default" />}
              label={<img src={creditCard} alt="Credit Card" />}
            />
            <FormControlLabel
              value="money"
              control={<Radio color="default" />}
              label={<img src={cash} alt="Money" />}
            />
          </RadioGroup>
        </FormControl>
        <DefaultButton
          name="Finalizar"
          _func={() => {
            dispatch(resetCartThunk());
            setFinish(true);
            setTimeout(() => {
              setOpen(false);
              history.push("/main-page");
            }, 3000);
          }}
        />
        {finish && (
          <span className="finish">
            Compra Finalizada!
            <div className="line" />
          </span>
        )}
      </Container>
    </SimpleModal>
  );
};

export default CheckoutPayment;
