import { NavBar } from "./NavBar";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("NavBar", () => {
  it("Should be visible", () => {
    render(<NavBar />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
