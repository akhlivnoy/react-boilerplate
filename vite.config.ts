import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        babelrc: true,
      },
    }),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "#assets": path.resolve(__dirname, "./src/app/assets"),
      "#components": path.resolve(__dirname, "./src/app/components"),
      "#constants": path.resolve(__dirname, "./src/app/constants"),
      "#hooks": path.resolve(__dirname, "./src/app/hooks"),
      "#models": path.resolve(__dirname, "./src/app/models"),
      "#navigation": path.resolve(__dirname, "./src/app/navigation"),
      "#redux": path.resolve(__dirname, "./src/app/redux"),
      "#pages": path.resolve(__dirname, "./src/app/pages"),
      "#services": path.resolve(__dirname, "./src/app/services"),
      "#themes": path.resolve(__dirname, "./src/app/themes"),
      "#types": path.resolve(__dirname, "./src/app/types"),
      "#utils": path.resolve(__dirname, "./src/app/utils"),
    },
  },
});
