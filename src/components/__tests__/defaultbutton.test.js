import { render, screen } from "@testing-library/react";
import DefaultButton from "../sharedButton";
import "@testing-library/jest-dom";

describe("Quando tiver tudo ok", () => {
  test("Verificando se componente botão esta sendo feito", () => {
    render(<DefaultButton name="Enviar"></DefaultButton>);
    expect(screen.getByRole("button", { name: /Enviar/i })).toBeInTheDocument();
  });

  test("Não esta certo", () => {
    render(<DefaultButton name="edimara1"></DefaultButton>);
    expect(screen.queryByText("edimara")).not.toBeInTheDocument();
  });
});
