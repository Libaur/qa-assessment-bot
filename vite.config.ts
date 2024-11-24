import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineConfig({
  plugins: [tsconfigPaths(), nodeResolve()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.ts",
      external: ['path', 'os', 'crypto'],
    },
  },
  optimizeDeps: {
    include: ["grammy"],
  },
});
