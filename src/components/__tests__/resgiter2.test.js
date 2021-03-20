import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Landing from "../../pages/landing";
import "@testing-library/jest-dom";

import { createMemoryHistory } from "history";
import { Router } from "react-router";


describe("Registerintegration", () => {

  test("Register after clicking", async () => {

    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Landing />
      </Router>
    );    
    userEvent.click(screen.getByRole("button", { name: /REGISTER/i }));
  
    expect(history.location.pathname).toBe("/registertype")
  });
});
