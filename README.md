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
   or
   ```
   yarn
   ```
3. Start the development server:
   ```
   npm run develop
   ```
   or
   ```
   yarn develop
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
