import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/glm-zafer-portfolio/",
  plugins: [react()],
  server: {
    port: 4000,
  },
});
