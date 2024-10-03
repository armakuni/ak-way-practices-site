import React, { PropsWithChildren } from "react"
import { NavBar } from "./bar/NavBar";
import Footer from "./foot/Footer";

export default function PostLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar/>
      <main className={"w-full flex-grow flex w-full items-center justify-center gap-4 py-4"}>
        <article className={"prose"}>
        {children}
        </article>
      </main>
      <Footer/>
    </>
  )


}