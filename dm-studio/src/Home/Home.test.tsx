/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Home from "./Home";
import React from "react";

const defaultRender = () => {
  return render(<Home title="Home Page"></Home>);
};
describe("Home Tests", () => {
  it('should display h1 with text "Home Page"', () => {
    const { getByText } = defaultRender();
    expect(getByText("Home Page")).toBeInTheDocument();
  });
});
