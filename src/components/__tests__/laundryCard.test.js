import LaundryCard from "../laudryCard";

import { render } from "@testing-library/react";

const dummyAddress = {
  zipcode: "83413676",
  street: "Joao matos de almeida",
  number: "458",
  district: "Vila Zumbi dos Palmares",
  city: "colombo",
  UF: "PR",
  coords: {
    latitude: -23.5655919,
    longitude: -46.6797807,
  },
};

const dummyCoords = {
  latitude: -25.3858387,
  longitude: -49.1840036,
};

describe("LaundryCard render", () => {
  describe("When the user allows geolocation", () => {
    it("Renders the card on the screen correctly", () => {
      const { getByTestId, getByText } = render(
        <LaundryCard
          name="test"
          score="5.0"
          address={dummyAddress}
          schedule="7:0 - 18:30"
          deliveryFee="10"
          src="https://picsum.photos/200/300"
          id="5"
          userCoordinates={dummyCoords}
        />
      );
      expect(getByTestId("LaundryCard")).toBeTruthy();
      expect(getByText("324.7KM")).toBeTruthy();
    });
  });
  describe("When the user does not allow geolocation", () => {
    it("Renders the card on the screen correctly", () => {
      const { getByTestId, getByText } = render(
        <LaundryCard
          name="test"
          score="5.0"
          schedule="7:0 - 18:30"
          deliveryFee="10"
          src="https://picsum.photos/200/300"
          id="5"
        />
      );
      expect(getByTestId("LaundryCard")).toBeTruthy();
      expect(getByText("Distância indisponível")).toBeTruthy();
    });
  });
});
