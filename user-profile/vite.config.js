import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  build: {
    target: "esnext", // This ensures top-level await is supported
  },
  plugins: [
    react(),
    federation({
      name: "userProfile",
      filename: "remoteEntry.js",
      exposes: {
        "./UserProfile": "./src/UserProfile",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3001,
    strictPort: true,
    fs: {
      strict: true, // Ensures Vite properly serves files from the allowed directory
    },
  },
});
