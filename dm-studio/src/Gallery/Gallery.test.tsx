/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Gallery from "./Gallery";
import React from "react";

const defaultRender = () => {
  return render(<Gallery title="Gallery"></Gallery>);
};
describe("Gallery Tests", () => {
  it('should display h1 with text "Gallery"', () => {
    const { getByText } = defaultRender();
    expect(getByText("Gallery")).toBeInTheDocument();
  });
});
