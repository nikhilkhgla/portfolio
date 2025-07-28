import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
  build: {
    outDir: "dist", // ✅ Build output will go directly inside 'dist/'
    emptyOutDir: true, // ✅ Clean old build
    chunkSizeWarningLimit: 5000, // Optional warning limit
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ✅ For cleaner imports
    },
  },
});
