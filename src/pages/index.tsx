import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import "@fontsource/maven-pro";
import Layout from "../components/layout";
import { UserIcon } from "@heroicons/react/16/solid";

type DataProps = {
  allMdx: {
    nodes: {
      excerpt?: string;
      fields: {
        slug?: string;
      };
      frontmatter: {
        title?: string;
        description?: string;
        category?: string;
        pill?: string;
        color?: string;
        icon?: string;
        topline?: string;
        bottomline?: string;
      };
    }[];
  };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout>
      <div className={"mx-auto container py-4 gap-4 flex flex-col"}>
        <h1 className={"text-7xl text-center"}>The AK Way Play Book</h1>
        <h2 className={"text-3xl text-center"}>
          Discover the key practices that make up The AK Way
        </h2>
        <div
          className={
            "grid lg:grid-cols-4 md:grid-cols-3 justify-items-stretch gap-4"
          }
        >
          {data.allMdx.nodes.map((item) => {
            let textColorClass = "text-base-content";
            let bgColorClass = "bg-info";

            if (item.frontmatter.color === "blue") {
              textColorClass = "text-base-content";
              bgColorClass = "bg-info";
            }

            return (
              <div className="flex flex-col bg-base-100 m-0 w-full shadow-2xl rounded-3xl">
                <a href={item?.fields?.slug ?? ""}>
                  <div
                    className={`${bgColorClass} text-info-content px-3 pt-3 rounded-t-3xl relative overflow-hidden z-0`}
                  >
                    {item.frontmatter.icon === "user" ? (
                      <UserIcon
                        className={
                          "absolute top-0 right-0 h-full fill-white/10 -z-10"
                        }
                      />
                    ) : null}
                    <div
                      className={
                        "border-neutral border-t border-x rounded-t-3xl px-5 pb-5 pb-2 pt-3 z-10"
                      }
                    >
                      {item.frontmatter.topline ? (
                        <div>{item.frontmatter.topline}</div>
                      ) : null}
                      {item.frontmatter.pill ? (
                        <div className={"badge text-sm"}>
                          {item.frontmatter.pill}
                        </div>
                      ) : null}
                      {item.frontmatter.category ? (
                        <div className={"text-4xl pt-8"}>
                          {item.frontmatter.category}
                        </div>
                      ) : null}
                      {item.frontmatter.bottomline ? (
                        <div>{item.frontmatter.bottomline}</div>
                      ) : null}
                    </div>
                  </div>
                  <div
                    className={`${textColorClass} px-8 pt-2 pb-8 rounded-b-3xl`}
                  >
                    <div>
                      <h1 className={"font-bold"}>
                        {item.frontmatter?.title ?? "Untitled"}
                      </h1>
                      <p className={"text-sm"}>
                        {item.frontmatter.description ? (
                          <p>{item.frontmatter.description}</p>
                        ) : null}
                        {!item.frontmatter.description && item.excerpt ? (
                          <p>{item.excerpt}</p>
                        ) : null}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Armakuni Way</title>
      <body className="subpixel-antialiased bg-base-100 text-base-content min-h-screen" />
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
          description
          category
          pill
          icon
          color
          topline
          bottomline
        }
      }
    }
  }
`;
