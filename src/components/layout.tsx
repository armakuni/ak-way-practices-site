import React, { PropsWithChildren } from "react";
import { NavBar } from "./bar/NavBar";
import Footer from "./foot/Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar />
      <main className={"w-full flex-grow flex"}>{children}</main>
      <Footer />
    </>
  );
}
