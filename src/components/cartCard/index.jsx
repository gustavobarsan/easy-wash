import { RiCloseCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunk";
import {
  MainContainer,
  ImgContainer,
  InfoContainer,
  Title,
  Value,
  DefaultImg,
} from "./style";

const CartCard = ({ title, value, id }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeFromCartThunk(id));
  };
  return (
    <>
      <MainContainer>
        <div className="remove">
          <RiCloseCircleLine size="2rem" onClick={removeFromCart} />
        </div>
        <ImgContainer>
          <DefaultImg src={"https://picsum.photos/200/300"} />
        </ImgContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Value>R$ {value}</Value>
        </InfoContainer>
      </MainContainer>
    </>
  );
};

export default CartCard;
