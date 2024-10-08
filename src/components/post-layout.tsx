import { graphql, useStaticQuery } from "gatsby";
import React, { PropsWithChildren } from "react";
import Helmet from "react-helmet";
import { NavBar } from "./bar/NavBar";
import Footer from "./foot/Footer";

export type PostLayoutProps = PropsWithChildren;

export default function PostLayout({ children }: PostLayoutProps) {
  const data = useStaticQuery(graphql`
    query data {
      mdx {
        id
        frontmatter {
          title
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Helmet>
        <title>
          {data.mdx.frontmatter.title} - {data.site.siteMetadata.title}
        </title>
      </Helmet>
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
