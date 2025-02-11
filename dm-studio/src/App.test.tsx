import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Data Driven testing
const nameList = ["Dhananjay", "Vishnu", "Gauri"];

const defaultRender = (name: string) => {
  return render(<App name={name} />);
};

describe.each(nameList)("Home Page Tests", (name) => {
  it(`should render learn react link when name is: ${name}`, () => {
    defaultRender(name);
    const linkElement = screen.getByText(
      `Hello ${name}. Welcome to Learn React!`
    );
    expect(linkElement).toBeInTheDocument();
  });

  it(`should match the snapshot when name is :${name}`, () => {
    const { asFragment } = defaultRender(name);
    expect(asFragment()).toMatchSnapshot();
  });
});
