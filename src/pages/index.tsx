import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import "@fontsource/maven-pro";
import Layout from "../components/layout";

type DataProps = {
  allMdx: {
    nodes: {
      excerpt?: string;
      fields: {
        slug?: string;
      };
      frontmatter: {
        title?: string;
        tags?: string[];
      };
    }[];
  };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout>
      <div className={"mx-auto container py-4 gap-4 flex flex-col"}>
        <h1 className={"text-7xl text-center"}>Practice Library</h1>
        <h2 className={"text-3xl text-center"}>
          Discover the key practices that make up The AK Way
        </h2>
        <ul
          className={
            "grid lg:grid-cols-4 md:grid-cols-3 justify-items-stretch gap-4"
          }
        >
          {data.allMdx.nodes.map((item) => {
            return (
              <a href={item?.fields?.slug ?? ""}>
                <div className="card bg-base-100 w-96 shadow-xl glass h-full w-full">
                  <figure>
                    <img
                      src="https://unsplash.it/640/325"
                      alt="Placeholder Image"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {item.frontmatter?.title ?? "Untitled"}
                    </h2>
                    {item.frontmatter?.tags ? (
                      <div className="card-actions">
                        {item.frontmatter?.tags.map((tag) => (
                          <div className="badge badge-outline">{tag}</div>
                        ))}
                      </div>
                    ) : null}
                    {item.excerpt ? <p>{item.excerpt}</p> : null}
                  </div>
                </div>
              </a>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Armakuni Way</title>
      <body className="subpixel-antialiased bg-base-100 text-base-content" />
    </>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          tags
        }
      }
    }
  }
`;
