import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../sharedInput";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
describe("Quando tiver tudo ok", () => {
  test("Verificando se componente botão esta sendo feito", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Input _id="teste" label="teste" name="teste" />
      </BrowserRouter>
    );
    const nameInputNode = getByLabelText("teste");
    expect(nameInputNode.getAttribute("name")).toBe("teste");
  });

  test("Verificando se input receve valores", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Input _id="teste" label="teste" name="teste" />
      </BrowserRouter>
    );
    const nameInputNode = getByLabelText('teste');
    expect (nameInputNode.value).toMatch("");
    fireEvent.change(nameInputNode,{target:{value:'testando agora'}})
    expect (nameInputNode.value).toMatch("testando agora");
  });
});
