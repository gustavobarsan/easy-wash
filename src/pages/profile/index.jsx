import Header from "../../components/header";
import Modal from "../../components/modalBase";
import DefaultButton from "../../components/sharedButton";
import { MainContainer, InformationContainer, Ocean, Wave } from "./style";
import { useState, useEffect } from "react";
import { useOpen } from "../../context/openModal";
import Input from "../../components/sharedInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../../store/modules/currentUser/thunk";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CepCoords from "coordenadas-do-cep";

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = localStorage.getItem("authToken");

  const user = useSelector((state) => {
    return state.user;
  });

  const [cep, setCep] = useState("");
  const [rua, setStreet] = useState("");
  const [bairro, setDistrict] = useState("");
  const [cidade, setCity] = useState("");
  const [uf, setUF] = useState("");

  const [errorMessage, setErrorMessage] = useState();

  const autoCompleteAddress = async () => {
    if (cep.length === 8) {
      try {
        const data = await CepCoords.getByCep(cep);
        setStreet(data.logradouro);
        setDistrict(data.bairro);
        setCity(data.localidade);
        setUF(data.uf);
      } catch (err) {
        setErrorMessage("Não foi possível concluir o seu cadastro");
      }
    }
  };

  const schema = yup.object({
    phone: yup.string(),
    address: yup.object({
      street: yup.string(),
      number: yup.string(),
      district: yup.string(),
      city: yup.string(),
      UF: yup.string(),
      zipcode: yup.string(),
    }),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    const newUser = { ...user, ...data };

    console.log({ newUser });
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

  const handleSetCep = (evt) => {
    setCep(evt.target.value);
  };

  const { open, setOpen } = useOpen();
  const handleModal = () => setOpen(!open);

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

  useEffect(() => {
    autoCompleteAddress();
  }, [cep]);

  useEffect(() => dispatch(getUserThunk()), [user]);
  const { street, number, district, city, UF } = user.address;
  return (
    <>
      <Header />
      <MainContainer>
        <h1>{user.name}</h1>

        <InformationContainer>
          <div>
            <h4>Nome:</h4>
            <p>{user.name}</p>
            <hr></hr>
            <h4>Telefone:</h4>
            <p>{user.phone}</p>
            <hr></hr>
            <h4>Endereço:</h4>
            <p>
              {street},&nbsp;
              {number},&nbsp;
              {district}&nbsp; - &nbsp;
              {city}&nbsp;
              {UF}
            </p>
            <hr></hr>
          </div>
          <DefaultButton name="Editar Perfil" _func={handleModal} />
          <br></br>
          <button className="remove" onClick={handleRemoveAccount}>
            Excluir conta
          </button>
        </InformationContainer>
      </MainContainer>

      <Modal>
        <form onSubmit={handleSubmit(handleForm)}>
          <h2>Editar Perfil</h2>

          <div className="div">
            <Input
              _error={!!errors.phone}
              _helperText={errors.phone?.message}
              _inputRef={register}
              name="phone"
              label="Telefone"
              margin="dense"
              _defaultValue={user.phone}
            />
          </div>
          <div className="div">
            <Input
              _error={!!errors.zipcode}
              _helperText={errors.zipcode?.message}
              _inputRef={register}
              name="address.zipcode"
              label="CEP"
              margin="dense"
              _onChange={(evt) => handleSetCep(evt)}
              value={cep}
              _defaultValue={user.address.zipcode}
            />
          </div>
          <div className="div">
            <Input
              _error={!!errors.street}
              _helperText={errors.street?.message}
              _inputRef={register}
              name="address.street"
              label="Rua"
              width="20rem"
              margin="dense"
              value={rua}
              _onChange={(evt) => setStreet(evt.target.value)}
              _defaultValue={user.address.street}
            />
            <Input
              _error={!!errors.number}
              _helperText={errors.number?.message}
              _inputRef={register}
              name="address.number"
              label="N&ordm;"
              width="4.5rem"
              margin="dense"
              _defaultValue={user.address.number}
            />
          </div>

          <div className="div">
            <Input
              _error={!!errors.district}
              _helperText={errors.district?.message}
              _inputRef={register}
              name="address.district"
              label="Bairro"
              width="20rem"
              margin="dense"
              value={bairro}
              _onChange={(evt) => setDistrict(evt.target.value)}
              _defaultValue={user.address.district}
            />
          </div>

          <div className="div">
            <Input
              _error={!!errors.city}
              _helperText={errors.city?.message}
              _inputRef={register}
              name="address.city"
              label="Cidade"
              width="20rem"
              margin="dense"
              value={cidade}
              _onChange={(evt) => setCity(evt.target.value)}
              _defaultValue={user.address.city}
            />
            <Input
              _error={!!errors.UF}
              _helperText={errors.UF?.message}
              _inputRef={register}
              id="outlined-select-currency"
              label="UF"
              margin="dense"
              width="4.5rem"
              name="address.UF"
              value={uf}
              _onChange={(evt) => setUF(evt.target.value)}
              _defaultValue={user.address.UF}
            ></Input>
          </div>
          <DefaultButton name="Confirmar" type="submit" />
        </form>
      </Modal>
      <Ocean>
        <Wave></Wave>
        <Wave></Wave>
      </Ocean>
    </>
  );
};

export default Profile;
