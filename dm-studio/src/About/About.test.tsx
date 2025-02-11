/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import About from "./About";
import React from "react";

const defaultRender = () => {
  return render(<About title="About Us"></About>);
};
describe("About Tests", () => {
  it('should display h1 with text "About Us"', () => {
    const { getByText } = defaultRender();
    expect(getByText("About Us")).toBeInTheDocument();
  });
});
