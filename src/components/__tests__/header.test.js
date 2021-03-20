import Header from "../header";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("When the component header is behaving correctly", () => {
  test("Should happen when the user is logged in", async () => {
    const authToken = "dsknadhasdhasdnus";
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Header />
      </Router>
    );

    localStorage.setItem("authToken", authToken);

    userEvent.click(screen.getByRole("button"));
    await screen.findByRole("button", { name: /perfil/i });
    await screen.findByRole("button", { name: /novo registro/i });
    await screen.findByRole("button", { name: /ver carrinho/i });
    await screen.findByRole("button", { name: /logout/i });
  });

  test("Should happen when the user is not logged in", async () => {
    localStorage.removeItem("authToken");

    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Header />
      </Router>
    );

    userEvent.click(screen.getByRole("button"));
    await screen.findByRole("button", { name: /entrar/i });
    await screen.findByRole("button", { name: /registre-se/i });
  });

  test("Should  log out user after clicking", async () => {
    const authToken = "dsknadhasdhasdnus";
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Header />
      </Router>
    );

    localStorage.setItem("authToken", authToken);

    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByRole("button", { name: /logout/i }));
    const auth = localStorage.getItem("authToken");
    expect(auth).toBeNull();
  });
});
