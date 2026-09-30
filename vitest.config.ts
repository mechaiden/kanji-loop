import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // e2e/ is Playwright's — it needs a browser and a running server.
    include: ["src/**/*.test.ts"],
  },
});
