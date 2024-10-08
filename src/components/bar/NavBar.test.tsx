import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { NavBar } from "./NavBar";

describe("NavBar", () => {
  it("Should be visible", () => {
    render(<NavBar />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
