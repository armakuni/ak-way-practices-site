# The AK Way Play Book

Welcome to The AK Way Play Book! This project is built using Gatsby and contains everything you need to get started. 🎉

## 🛠️ Prerequisites

- Node.js (v22.2.0 or later)
- npm

## 🚀 Quick Start

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run develop
   ```

## 📜 Available Scripts

- `npm run lint`: Run ESLint to check for code style issues
- `npm run lint:fix`: Run ESLint and automatically fix issues
- `npm run test:unit`: Run unit tests using Vitest
- `npm run test:e2e`: Run end-to-end tests using Playwright
- `npm run develop`: Start the Gatsby development server
- `npm run start`: Alias for `develop`
- `npm run build`: Build the Gatsby site for production
- `npm run serve`: Serve the production build locally
- `npm run clean`: Clear the Gatsby cache and public directories
- `npm run typecheck`: Run TypeScript type checking

## 🧰 Tech Stack

- Gatsby
- React
- TypeScript
- Tailwind CSS
- MDX
- Vitest (for unit testing)
- Playwright (for e2e testing)

## 📝 Important Notes

- The project uses an override for `@mdx-js/react` in the `gatsby-plugin-mdx` dependency. This is due to a known issue with Gatsby and MDX. For more information, see [this GitHub issue](https://github.com/gatsbyjs/gatsby/issues/38928).

## 📚 Additional Information

- The project uses Tailwind CSS for styling. Make sure to check the Tailwind configuration for any customizations.
- ESLint and Prettier are set up for code linting and formatting. You can customize the rules in the respective configuration files.
- The project includes both unit testing (Vitest) and end-to-end testing (Playwright) setups. Make sure to write and maintain tests as you develop.

## 🤝 Contributing

You can open a PR. If you are a member of AK it'll do a preview deploy.

Just copy one of the MDX files, fill in the bits and it'll appear. Here's a little guide to the mdx files. 

Here's a little breakdown of the `frontmatter` (the bit between the `---` bits.

![image](https://github.com/user-attachments/assets/79316c76-691a-4a0c-8a38-55dd80b2f6c5)

* Title - Tertiary ordering -  This is the title as it appears on the index page
* category - Primary ordering - Appears under the title
* Subcategory - Secondary ordering - The small text above the title
* Topline - The bold line above the description
* Description - Description that appears under the
* Color - The color
* Icon - The faded icon in the background

The theme for the page is set by `export { default as default } from "../../../../components/post-layout"`

The rest is standard markdown.

```mdx
---
title: "WIP Limit"
description: "WIP limit of one means that only one item can be in progress at a given stage and would be ideally pair programmed/mobbed to be effective"
category: "XP & Agility"
subcategory: "We work in weekly iterations"
topline: "Work in progress has limit of 1"
color: "light-blue"
icon: "arrow-path"
---

export { default as default } from "../../../../components/post-layout";

# WIP Limit

The benefits of working on 1 thing at a time:

**Maximise focus:** By limiting the number of tasks, team members can concentrate fully on one item at a time, reducing context switching and improving efficiency.

**Identify bottlenecks:** If a single item is stuck, it becomes immediately apparent, allowing for quicker resolution.

**Reduce multitasking:** Encourages a single-tasking approach, often leading to better quality and faster delivery.

**Visualize workflow:** Makes it easier to see where work is piling up and where improvements can be made.
```
