import React, { PropsWithChildren } from "react";
import { NavBar } from "./bar/NavBar";
import Footer from "./foot/Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar />
      <main className={"w-full flex-grow flex min-h-[70vh]"}>{children}</main>
      <Footer />
    </>
  );
}
