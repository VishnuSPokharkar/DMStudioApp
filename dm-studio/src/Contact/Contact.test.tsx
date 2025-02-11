/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Contact from "./Contact";
import React from "react";

const defaultRender = () => {
  return render(<Contact title="Contact Us"></Contact>);
};
describe("Contact Tests", () => {
  it('should display h1 with text "Contact Us"', () => {
    const { getByText } = defaultRender();
    expect(getByText("Contact Us")).toBeInTheDocument();
  });
});
