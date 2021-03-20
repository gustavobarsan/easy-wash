import Header from "../../components/header";
import Modal from "../../components/modalBase";
import DefaultButton from "../../components/sharedButton";
import { MainContainer, InformationContainer, InputContainer } from "./style";
import { useEffect } from "react";
import { useOpen } from "../../context/openModal";
import Input from "../../components/sharedInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../../store/modules/currentUser/thunk";
import axios from "axios";
import { useHistory } from "react-router-dom";

const EditServices = () => {
  const history = useHistory();
  const token = localStorage.getItem("authToken");
  //modal state
  const { open, setOpen } = useOpen();
  const handleModal = () => setOpen(!open);

  //user thunk
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });
  useEffect(() => dispatch(getUserThunk()), [user]);

  // form yup
  const schema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.string().required(),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    const objectData = {
      services: [...user.services, data],
    };
    const newUser = { ...user, ...objectData };
    console.log(newUser);
    const token = localStorage.getItem("authToken");
    axios
      .patch(
        `https://easy-wash-server.herokuapp.com/users/${user.id}`,
        newUser,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        handleModal();
        dispatch(getUserThunk());
      })
      .catch((error) => setError(error));
  };

  const handleRemoveAccount = async () => {
    console.log("removeu");
    try {
      await axios.delete(
        `https://easy-wash-server.herokuapp.com/users/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("authToken");
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <MainContainer>
        <h1>{user.company}</h1>
        <InformationContainer>
          <h2>Serviços:</h2>
          <hr />
          {user.services.map((service, key) => (
            <div className="div" key={key}>
              <h2>{service.title}</h2>
              <p>
                <b>Descrição:</b> {service.description}
              </p>
              <h3>R${service.price}</h3>
              <hr></hr>
            </div>
          ))}
          <DefaultButton name="Adicionar Serviço" _func={handleModal} />
          <br></br>
          <button className="remove" onClick={handleRemoveAccount}>
            Excluir conta
          </button>
        </InformationContainer>
      </MainContainer>
      <Modal>
        <form onSubmit={handleSubmit(handleForm)}>
          <h1>Adicionar Serviço</h1>

          <InputContainer>
            <Input
              _error={!!errors.title}
              _helperText={errors.title?.message}
              _inputRef={register}
              name="title"
              label="Nome"
              margin="dense"
            />
          </InputContainer>

          <InputContainer>
            <Input
              _error={!!errors.price}
              _helperText={errors.price?.message}
              _inputRef={register}
              name="price"
              label="Preço"
              margin="dense"
              type="number"
            />
          </InputContainer>

          <InputContainer>
            <Input
              height="100%"
              id="outlined-multiline-static"
              multiline
              rows={5}
              _error={!!errors.description}
              _helperText={errors.description?.message}
              _inputRef={register}
              name="description"
              label="Descrição"
              margin="dense"
              variant="outlined"
            />
          </InputContainer>

          <DefaultButton type="submit" name="Finalizar" />
        </form>
      </Modal>
    </>
  );
};

export default EditServices;
