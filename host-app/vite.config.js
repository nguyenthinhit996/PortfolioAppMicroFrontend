// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import federation from "vite-plugin-federation";

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: "host",
//       remotes: {
//         userProfile: "http://localhost:3001/assets/remoteEntry.js",
//         // blogDashboard: "http://localhost:3002/assets/remoteEntry.js",
//         // blogFeed: "http://localhost:3003/assets/remoteEntry.js",
//         // commentingSystem: "http://localhost:3004/assets/remoteEntry.js",
//       },
//       shared: ["react", "react-dom"],
//     }),
//   ],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import federation from "vite-plugin-federation";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        userProfile: "http://localhost:3001/dist/assets/remoteEntry.js",
        // "blog-dashboard": "blog-dashboard@http://localhost:3002/remoteEntry.js",
        // Add other remotes here
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
    fs: {
      strict: true, // This ensures that only allowed files are served
    },
  },
});
