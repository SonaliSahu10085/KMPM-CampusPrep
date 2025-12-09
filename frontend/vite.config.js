import path from "path";
import { defineConfig } from "vitest/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true, // no need to import describe/it/expect in each file
    environment: "jsdom", // for React components : happy-dom or 'jsdom', 'node'
    setupFiles: "./src/setupTests.ts", // global setup for all tests, no need to import jsdom line in each file
    include: ["src/test/**/*.test.{js,ts,jsx,tsx}"], // only run your test folder
  },
});
