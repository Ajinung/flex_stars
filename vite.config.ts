import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "headerTeam",
      filename: "headerTeam.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
    VitePWA({ registerType: "autoUpdate" }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

//vite config for launching service
// import { defineConfig } from "vite";
// import federation from "@originjs/vite-plugin-federation";
// import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: "launch",
//       remotes: {
//         headerApp: "http://localhost:8811/assets/headerTeam.js",
//       },
//       shared: ["react", "react-dom"],
//     }),
//   ],
//   build: {
//     modulePreload: false,
//     target: "esnext",
//     minify: false,
//     cssCodeSplit: false,
//   },
// });

// for declaration
//declare module "headerTeame/Header"
