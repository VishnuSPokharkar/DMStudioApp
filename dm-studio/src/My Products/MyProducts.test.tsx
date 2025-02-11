/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import MyProducts from "./MyProducts";
import React from "react";

const defaultRender = () => {
  return render(<MyProducts title="My Products"></MyProducts>);
};
describe("MyProducts Tests", () => {
  it('should display h1 with text "My Products"', () => {
    const { getByText } = defaultRender();
    expect(getByText("My Products")).toBeInTheDocument();
  });
});
