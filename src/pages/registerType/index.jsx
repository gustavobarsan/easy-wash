import Header from "../../components/header";
import { ContainerRegisterType, Ocean, Wave } from "./style";
import DefaultButton from "../../components/sharedButton";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const RegisterType = () => {
  const history = useHistory();

  const [value, setValue] = useState("PF");
  const [aviso, setAviso] = useState(false);

  console.log(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      setAviso(!aviso);
    }
    if (value === "PF") {
      history.push("/register/PF");
    }
    if (value === "PJ") {
      history.push("/register/PJ");
    }
  };
  return (
    <>
      <Header />
      <ContainerRegisterType>
        <h2>Como deseja se Cadastrar ?</h2>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="PF"
              control={<Radio className="teste" />}
              label="Registrar como cliente"
            />
            <FormControlLabel
              value="PJ"
              control={<Radio />}
              label="Registrar como Lavanderia"
            />
          </RadioGroup>
          <DefaultButton name="Continuar" _func={handleSubmit} />
        </FormControl>
      </ContainerRegisterType>
      <Ocean>
        <Wave></Wave>
        <Wave></Wave>
      </Ocean>
    </>
  );
};

export default RegisterType;
