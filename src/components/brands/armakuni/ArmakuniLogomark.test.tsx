import { describe, expect, it } from "vitest";
import { ArmakuniLogomark } from "./ArmakuniLogomark";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("ArmakuniLogomark", () => {
  it("should render the Armakuni logo", async () => {
    render(<ArmakuniLogomark />);
    expect(
      await screen.findByRole("img", { name: "Armakuni" }),
    ).toBeInTheDocument();
  });
});