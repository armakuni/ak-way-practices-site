import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import "@fontsource/maven-pro";
import Layout from "../components/layout";
import {
  ArchiveBoxIcon,
  ArrowPathIcon,
  CloudIcon,
  CodeBracketIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

type DataProps = {
  allMdx: {
    nodes: {
      id?: string;
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
        subcategory?: string;
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
          {data
            ? data.allMdx.nodes.map((item) => {
                let textColorClass = "text-info-content";
                let bgColorClass = "bg-info";

                if (item.frontmatter.color === "blue") {
                  textColorClass = "text-info-content";
                  bgColorClass = "bg-info";
                }
                if (item.frontmatter.color === "light-blue") {
                  textColorClass = "text-info-light-content";
                  bgColorClass = "bg-info-light";
                }

                if (item.frontmatter.color === "green") {
                  textColorClass = "text-success-content";
                  bgColorClass = "bg-success";
                }

                if (item.frontmatter.color === "orange") {
                  textColorClass = "text-warning-content";
                  bgColorClass = "bg-warning";
                }

                if (item.frontmatter.color === "pink") {
                  textColorClass = "text-accent-content";
                  bgColorClass = "bg-accent";
                }

                if (item.frontmatter.color === "red") {
                  textColorClass = "text-error-content";
                  bgColorClass = "bg-error";
                }

                return (
                  <div
                    key={item.id}
                    className="flex flex-col bg-base-200 w-full shadow-2xl rounded-3xl"
                  >
                    <a
                      href={item?.fields?.slug ?? ""}
                      className={"flex flex-col"}
                    >
                      <div
                        className={`${bgColorClass} ${textColorClass} px-3 pt-3 rounded-t-3xl relative overflow-hidden z-0 flex-grow flex justify-center h-[14em]`}
                      >
                        {item.frontmatter.icon === "user" ? (
                          <UserIcon
                            className={
                              "absolute -top-5 -right-10 h-full stroke-white/10 -z-10"
                            }
                          />
                        ) : null}
                        {item.frontmatter.icon === "users" ? (
                          <UsersIcon
                            className={
                              "absolute -right-7 -top-7 h-full stroke-white/10 -z-10"
                            }
                          />
                        ) : null}
                        {item.frontmatter.icon === "cloud" ? (
                          <CloudIcon
                            className={
                              "absolute -right-7 -top-10 h-full stroke-white/10 -z-10"
                            }
                          />
                        ) : null}
                        {item.frontmatter.icon === "code-bracket" ? (
                          <CodeBracketIcon
                            className={
                              "absolute -right-7 -top-10 h-full stroke-white/10 -z-10"
                            }
                          />
                        ) : null}
                        {item.frontmatter.icon === "arrow-path" ? (
                          <ArrowPathIcon
                            className={
                              "absolute -right-7 -top-10 h-full stroke-white/10 -z-10"
                            }
                          />
                        ) : null}
                        {item.frontmatter.icon === "archive-box" ? (
                          <ArchiveBoxIcon
                            className={
                              "absolute -right-7 -top-10 h-full stroke-white/10 -z-10"
                            }
                          />
                        ) : null}
                        <div
                          className={
                            "border-neutral border-t border-x rounded-t-3xl px-5 pb-5 pb-2 pt-3 z-10 flex-grow flex-col flex"
                          }
                        >
                          {item.frontmatter.subcategory ? (
                            <div>{item.frontmatter.subcategory}</div>
                          ) : null}
                          {item.frontmatter.pill ? (
                            <div className={"badge text-sm"}>
                              {item.frontmatter.pill}
                            </div>
                          ) : null}
                          {item.frontmatter.title ? (
                            <div
                              className={"text-4xl flex-grow items-end flex"}
                            >
                              {item.frontmatter.title}
                            </div>
                          ) : null}
                          {item.frontmatter.category ? (
                            <div>{item.frontmatter.category}</div>
                          ) : null}
                        </div>
                      </div>
                      <div
                        className={`text-base-content px-8 pt-2 pb-8 rounded-b-3xl`}
                      >
                        <div>
                          <h3 className={"font-bold"}>
                            {item.frontmatter?.topline ?? "Untitled"}
                          </h3>
                          <div className={"text-sm"}>
                            {item.frontmatter.description ? (
                              <p>{item.frontmatter.description}</p>
                            ) : null}
                            {!item.frontmatter.description && item.excerpt ? (
                              <p>{item.excerpt}</p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })
            : null}
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
      <body className="subpixel-antialiased bg-base-100 text-base-content min-h-screen overflow-x-hidden" />
    </>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: [
        { frontmatter: { category: ASC } }
        { frontmatter: { subcategory: ASC } }
        { frontmatter: { title: ASC } }
      ]
    ) {
      nodes {
        id
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
          subcategory
        }
      }
    }
  }
`;
