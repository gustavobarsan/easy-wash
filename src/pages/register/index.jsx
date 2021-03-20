import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../../components/header";
import CepCoords from "coordenadas-do-cep";
import axios from "axios";
import SharedInput from "../../components/sharedInput";
import SharedButton from "../../components/sharedButton";

import { Form, Container, Title, OuterContainer } from "./style.js";

const Register = () => {
  const { type } = useParams();
  const history = useHistory();

  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUF] = useState("");
  const [coords, setCoords] = useState({});

  const [errorMessage, setErrorMessage] = useState();

  const [showRadius, _setShowRadius] = useState(type === "PJ" ? true : false);
  const [showDeliveryfee, _setShowDeliveryfee] = useState(
    type === "PJ" ? true : false
  );
  const [showInitial, _setShowInitial] = useState(type === "PJ" ? true : false);
  const [showEnd, _setShowEnd] = useState(type === "PJ" ? true : false);

  const autoCompleteAddress = async () => {
    if (cep.length === 8) {
      try {
        const data = await CepCoords.getByCep(cep);
        setStreet(data.logradouro);
        setDistrict(data.bairro);
        setCity(data.localidade);
        setUF(data.uf);
        setCoords({ latitude: data.lat, longitude: data.lon });
      } catch (err) {
        setErrorMessage("Não foi possível concluir o seu cadastro");
      }
    }
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caractéres"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    phone: yup
      .string()
      .required("Campo obrigatório")
      .typeError("Apenas números"),
    cpf: yup.string().required("Campo obrigatório"),

    password: yup.string().required("Campo obrigatório"),
    rePassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas não compativeis"),

    zipcode: yup.string().length(8, "Necessário 8 caracteres"),
    street: yup.string().required("Campo obrigatório"),
    number: yup
      .number()
      .required("Campo obrigatório")
      .typeError("Apenas números")
      .integer("Apenas números inteiros"),
    district: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    uf: yup
      .string("Apenas letras")
      .required("Campo obrigatório")
      .length(2, "Apenas dois caracteres"),
    showRadius: yup.boolean(),
    radius: yup
      .number()
      .typeError("Apenas números")
      .when("showRadius", {
        is: true,
        then: yup
          .number()
          .required("Campo obrigatório")
          .typeError("Apenas números")
          .integer("Apenas números inteiros"),
      }),
    showDeliveryfee: yup.boolean(),
    deliveryfee: yup
      .number()
      .typeError("Apenas números")
      .when("showDeliveryfee", {
        is: true,
        then: yup
          .number()
          .typeError("Apenas números")
          .required("Campo obrigatório"),
      }),
    showInitial: yup.boolean(),
    initial: yup.string().when("showInitial", {
      is: true,
      then: yup.string().required("Campo obrigatório"),
    }),
    showEnd: yup.boolean(),
    end: yup.string().when("showEnd", {
      is: true,
      then: yup.string().required("Campo obrigatório"),
    }),
  });

  useEffect(() => {
    autoCompleteAddress();
  }, [cep]);

  const handleSetCep = (evt) => {
    setCep(evt.target.value);
  };

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const login = async (formattedObject) => {
    try {
      const res = await axios.post(
        "https://easy-wash-server.herokuapp.com/register",
        formattedObject
      );
      const token = await res.data.accessToken;
      localStorage.setItem("authToken", token);
      if (
        localStorage.getItem("authToken") &&
        localStorage.getItem("authToken") !== ""
      ) {
        console.log(token);
        history.push("/main-page");
      }
    } catch (err) {
      console.log(err);
      setErrorMessage("Não foi possivel concluir o seu cadastro");
    }
  };
  const handleFormSubmit = (data) => {
    const realName = type === "PJ" ? "company" : "name";
    const formattedObject = {
      email: data.email,
      password: data.password,
      type: type,
      phone: data.phone,
      address: {
        zipcode: cep,
        street: data.street,
        number: data.number,
        district: data.district,
        city: data.city,
        UF: data.info,
        coords: coords,
      },
      radius: data.radius,
      deliveryfee: data.deliveryfee,
      schedule: {
        initial: data.initial,
        end: data.end,
      },
      services: [],
    };

    formattedObject[realName] = data.name;

    console.log(formattedObject);

    login(formattedObject);
  };

  return (
    <OuterContainer>
      <Header />
      <Container>
        <Title>REGISTRO</Title>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="container_personal_info">
            <h2 className="section_title">Informações de conta</h2>

            <SharedInput
              label="Nome"
              name="name"
              _inputRef={register}
              width="31rem"
              _helperText={errors.name?.message}
              _error={!!errors.name}
              _type="text"
              _id="name"
            />
            <SharedInput
              label="Email"
              name="email"
              _inputRef={register}
              width="31rem"
              _helperText={errors.email?.message}
              _error={!!errors.email}
              _type="email"
              _id="email"
            />
            <SharedInput
              label="Telefone"
              name="phone"
              _inputRef={register}
              width="31rem"
              _helperText={errors.phone?.message}
              _error={!!errors.phone}
              _type="string"
              _id="phone"
            />
            <SharedInput
              label={type === "PJ" ? "CNPJ" : "CPF"}
              name="cpf"
              _inputRef={register}
              width="31rem"
              _helperText={errors.cpf?.message}
              _error={!!errors.cpf}
              _type="text"
              _id="cpf"
            />
            <SharedInput
              label="Senha"
              name="password"
              _inputRef={register}
              width="31rem"
              _helperText={errors.password?.message}
              _error={!!errors.password}
              _type="password"
              _id="password"
            />
            <SharedInput
              label="Repetir senha"
              name="rePassword"
              width="31rem"
              _inputRef={register}
              _helperText={errors.rePassword?.message}
              _error={!!errors.rePassword}
              _type="password"
              _id="rePassword"
            />
          </div>

          <div className="container_address_info">
            <h2 className="section_title">Informações de endereço</h2>
            <SharedInput
              label="CEP"
              name="zipcode"
              value={cep}
              _onChange={(evt) => handleSetCep(evt)}
              width="31rem"
              _helperText={errors.zipcode?.message}
              _error={!!errors.zipcode}
              _type="number"
              _maxLength="8"
              _id="zipcode"
            />
            <div className="single_liner">
              <SharedInput
                label="Rua"
                name="street"
                value={street}
                _inputRef={register}
                _onChange={(evt) => setStreet(evt.target.value)}
                width="20rem"
                _helperText={errors.street?.message}
                _error={!!errors.street}
                _type="text"
                _id="street"
              />

              <SharedInput
                label="Numero"
                name="number"
                type="number"
                _inputRef={register}
                width="10rem"
                _helperText={errors.number?.message}
                _error={!!errors.number}
                _type="number"
                _min="0"
                _id="number"
              />
            </div>
            <SharedInput
              label="Bairro"
              name="district"
              _inputRef={register}
              value={district}
              _onChange={(evt) => setDistrict(evt.target.value)}
              width="31rem"
              _helperText={errors.district?.message}
              _error={!!errors.district}
              _type="text"
              _id="district"
            />
            <div className="single_liner">
              <SharedInput
                label="Cidade"
                name="city"
                _inputRef={register}
                value={city}
                _onChange={(evt) => setCity(evt.target.value)}
                width="20rem"
                _helperText={errors.city?.message}
                _error={!!errors.city}
                _type="text"
                _id="city"
              />
              <SharedInput
                label="UF"
                name="uf"
                _inputRef={register}
                value={uf}
                _onChange={(evt) => setUF(evt.target.value)}
                width="10rem"
                _helperText={errors.uf?.message}
                _error={!!errors.uf}
                _type="text"
                _maxLength="2"
                _id="uf"
              />
            </div>
          </div>
          {type === "PJ" && (
            <div className="container_service_info">
              <input
                className="invisible"
                value={showRadius}
                name="showRadius"
                _inputRef={register}
              />
              <input
                className="invisible"
                value={showDeliveryfee}
                name="showDeliveryfee"
                _inputRef={register}
              />
              <input
                className="invisible"
                value={showInitial}
                name="showInitial"
                _inputRef={register}
              />
              <input
                className="invisible"
                value={showEnd}
                name="showEnd"
                _inputRef={register}
              />

              <h2 className="section_title">Informações de serviço</h2>
              <div className="single_liner double_liner">
                <SharedInput
                  label="Area de serviço (KM)"
                  name="radius"
                  _inputRef={register}
                  width="15rem"
                  _helperText={errors.radius?.message}
                  _error={!!errors.radius}
                  _type="number"
                  _min="0"
                />
                <SharedInput
                  label="Valor do frete"
                  name="deliveryfee"
                  _inputRef={register}
                  width="15rem"
                  _helperText={errors.deliveryfee?.message}
                  _error={!!errors.deliveryfee}
                  _type="number"
                  _min="0"
                />
              </div>
              <h3 className="section_subtitle">Horario de atendimento</h3>
              <div className="single_liner double_liner">
                <SharedInput
                  label="Inicio"
                  name="initial"
                  _inputRef={register}
                  width="15rem"
                  _helperText={errors.initial?.message}
                  _error={!!errors.initial}
                  _type="time"
                  _defaultValue="07:30"
                />
                <SharedInput
                  label="Fim"
                  name="end"
                  _inputRef={register}
                  width="15rem"
                  _helperText={errors.end?.message}
                  _error={!!errors.end}
                  _type="time"
                  _defaultValue="18:30"
                />
              </div>
            </div>
          )}

          <SharedButton
            type="submit"
            name="Enviar"
            _inputRef={register}
            width="15rem"
            height="3rem"
          />
          {errorMessage && <p style={{ color: "#740c0c" }}>{errorMessage}</p>}
        </Form>
      </Container>
    </OuterContainer>
  );
};
export default Register;
