import React, { PropsWithChildren } from "react";
import { NavBar } from "./bar/NavBar";
import Footer from "./foot/Footer";

export default function PostLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar />
      <main
        className={
          "w-full flex-grow flex min-h-[70vh] w-full flex-grow flex w-full justify-center gap-4 py-4"
        }
      >
        <article className={"prose"}>{children}</article>
      </main>
      <Footer />
    </>
  );
}
