import react from '@vitejs/plugin-react';
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: { reporter: [`text`, `json`, `html`], },
    setupFiles: ["src/setupTests.mts"],
    environment: "happy-dom",
    exclude: [
      "./e2e/**",
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
    ],
    typecheck: { enabled: true },
  },
})

