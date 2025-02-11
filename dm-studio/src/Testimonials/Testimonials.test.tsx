/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Testimonials from "./Testimonials";
import React from "react";

const defaultRender = () => {
  return render(<Testimonials title="Testimonials"></Testimonials>);
};
describe("Testimonials Tests", () => {
  it('should display h1 with text "Testimonials"', () => {
    const { getByText } = defaultRender();
    expect(getByText("Testimonials")).toBeInTheDocument();
  });
});
