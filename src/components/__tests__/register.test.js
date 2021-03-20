import { render, screen,fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "../../pages/register";
import axios from "axios";
import "@testing-library/jest-dom";

import { BrowserRouter } from "react-router-dom";

describe("Register", () => {
  test("Name field should have label", async () => {
    const {getByLabelText} = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>    
    );    
    const nameInputNode = getByLabelText('Nome');
    expect(nameInputNode.getAttribute("name")).toBe("name");
});
test("Name input should accept text", async () => {
  const {getByLabelText} = render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>    
  );    
  const nameInputNode = getByLabelText('Nome');
  expect (nameInputNode.value).toMatch("");
  fireEvent.change(nameInputNode,{target:{value:'testando agora'}})
  expect (nameInputNode.value).toMatch("testando");
});


test("Email field should have label", async () => {
  const {getByLabelText} = render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>    
  );    
  const emailInputNode = getByLabelText('Email');
  expect(emailInputNode.getAttribute("name")).toBe("email");
});
test("Email input should accept text", async () => {
const {getByLabelText} = render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>    
);    
const emailInputNode = getByLabelText('Email');
expect (emailInputNode.value).toMatch("");
fireEvent.change(emailInputNode,{target:{value:'testando@gmail.com'}})
expect (emailInputNode.value).toMatch("testando");
});


test("Phone field should have label", async () => {
  const {getByLabelText} = render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>    
  );    
  const phoneInputNode = getByLabelText('Telefone');
  expect(phoneInputNode.getAttribute("name")).toBe("phone");
});
test("Phone input should accept text", async () => {
const {getByLabelText} = render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>    
);    
const phoneInputNode = getByLabelText('Telefone');
expect (phoneInputNode.value).toMatch("");
fireEvent.change(phoneInputNode,{target:{value:'36756470'}})
expect (phoneInputNode.value).toMatch("36756470");
});

test("CPF field should have label", async () => {
  const {getByLabelText} = render(
    <BrowserRouter> 
        <Register></Register>
    </BrowserRouter>    
  );    
  const cpfInputNode = getByLabelText('CPF');
  expect(cpfInputNode.getAttribute("name")).toBe("cpf");
});
test("CPF input should accept text", async () => {
const {getByLabelText} = render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>    
);    
const cpfInputNode = getByLabelText('CPF');
expect (cpfInputNode.value).toMatch("");
fireEvent.change(cpfInputNode,{target:{value:'52359739093'}})
expect (cpfInputNode.value).toMatch("52359739093");
});


test("Password field should have label", async () => {
  const {getByLabelText} = render(
    <BrowserRouter> 
        <Register></Register>
    </BrowserRouter>    
  );    
  const passwordInputNode = getByLabelText('Senha');
  expect(passwordInputNode.getAttribute("name")).toBe("password");
});
test("Password input should accept text", async () => {
const {getByLabelText} = render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>    
);    
const passwordInputNode = getByLabelText('Senha');
expect (passwordInputNode.value).toMatch("");
fireEvent.change(passwordInputNode,{target:{value:'1234'}})
expect (passwordInputNode.value).toMatch("1234");
});

})

test("rePassword field should have label", async () => {
  const {getByLabelText} = render(
    <BrowserRouter> 
        <Register></Register>
    </BrowserRouter>    
  );    
  const rePasswordInputNode = getByLabelText('Repetir senha');
  expect(rePasswordInputNode.getAttribute("name")).toBe("rePassword");
});
test("rePassword input should accept text", async () => {
const {getByLabelText} = render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>    
);    
const rePasswordInputNode = getByLabelText('Repetir senha');
expect (rePasswordInputNode.value).toMatch("");
fireEvent.change(rePasswordInputNode,{target:{value:'1234'}})
expect (rePasswordInputNode.value).toMatch("1234");
});

test("CEP field should have label", async () => {
  const {getByLabelText} = render(
    <BrowserRouter> 
        <Register></Register>
    </BrowserRouter>    
  );    
  const cepInputNode = getByLabelText('CEP');
  expect(cepInputNode.getAttribute("name")).toBe("zipcode");
});
test("CEP  input should accept text", async () => {
const {getByLabelText} = render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>    
);    
const cepInputNode = getByLabelText('Repetir senha');
expect (cepInputNode.value).toMatch("");
fireEvent.change(cepInputNode,{target:{value:'1234122222'}})
expect (cepInputNode.value).toMatch("1234");
});

test("Street field should have label", async () => {
  const {getByLabelText} = render(
    <BrowserRouter> 
        <Register></Register>
    </BrowserRouter>    
  );    
  const streetInputNode = getByLabelText('Rua');
  expect(streetInputNode.getAttribute("name")).toBe("street");
});
test("Street input should accept text", async () => {
const {getByLabelText} = render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>    
);    
const streetInputNode = getByLabelText('Rua');
expect (streetInputNode.value).toMatch("");
fireEvent.change(streetInputNode,{target:{value:'Rua joão matos de almeida'}})
expect (streetInputNode.value).toMatch("Rua joão matos de almeida");
});


test("Number field should have label", async () => {
  const {getByLabelText} = render(
    <BrowserRouter> 
        <Register></Register>
    </BrowserRouter>    
  );    
  const numberInputNode = getByLabelText('Numero');
  expect(numberInputNode.getAttribute("name")).toBe("number");
});

test("Number input should accept text", async () => {
const {getByLabelText} = render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>    
);    
const numberInputNode = getByLabelText('Numero');
expect (numberInputNode.value).toMatch("");
fireEvent.change(numberInputNode,{target:{value:'47566'}})
expect (numberInputNode.value).toMatch("47566");
});


test("district field should have label", async () => {
  const {getByLabelText} = render(
    <BrowserRouter> 
        <Register></Register>
    </BrowserRouter>    
  );    
  const streetInputNode = getByLabelText('Bairro');
  expect(streetInputNode.getAttribute("name")).toBe("district");
});

test("district input should accept text", async () => {
const {getByLabelText} = render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>    
);    
const districtInputNode = getByLabelText('Bairro');
expect (districtInputNode.value).toMatch("");
fireEvent.change(districtInputNode,{target:{value:'Maua'}})
expect (districtInputNode.value).toMatch("Maua");
});



test("city field should have label", async () => {
  const {getByLabelText} = render(
    <BrowserRouter> 
        <Register></Register>
    </BrowserRouter>    
  );    
  const cityInputNode = getByLabelText('Cidade');
  expect(cityInputNode.getAttribute("name")).toBe("city");
});

test("city input should accept text", async () => {
const {getByLabelText} = render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>    
);    
const cityInputNode = getByLabelText('Cidade');
expect (cityInputNode.value).toMatch("");
fireEvent.change(cityInputNode,{target:{value:'Colombo'}})
expect (cityInputNode.value).toMatch("Colombo");
});


test("Federative unit field should have label", async () => {
  const {getByLabelText} = render(
    <BrowserRouter> 
        <Register></Register>
    </BrowserRouter>    
  );    
  const ufInputNode = getByLabelText('UF');
  expect(ufInputNode.getAttribute("name")).toBe("uf");
});

test("Federative unit input should accept text", async () => {
const {getByLabelText} = render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>    
);    
const ufInputNode = getByLabelText('UF');
expect (ufInputNode.value).toMatch("");
fireEvent.change(ufInputNode,{target:{value:'PR'}})
expect (ufInputNode.value).toMatch("PR");
});
