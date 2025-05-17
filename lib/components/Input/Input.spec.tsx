import React from 'react';
import { Input } from ".";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect} from "vitest";

describe("@component/Input", () => {
  it("should render input with label", () => {
    render(<Input labelText='Username'/>);
    const labelText = screen.getByText("Username");
    expect(labelText).toBeInTheDocument();
  })

  it("should render input with error message", () => {
    render(<Input labelText='Username' errorMessage='Username is required' />);
    const errorMessage = screen.getByRole("alert");
    expect(errorMessage).toHaveTextContent("Username is required");
  })

  it("should match to snapshot", () => {
    const { asFragment } = render(<Input labelText="Username"/>);
    expect(asFragment()).toMatchSnapshot();
  })
})