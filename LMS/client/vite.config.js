import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      fontSize: {
        "course-details-heading-small": ["26px", "36px"],
        "course-details-heading-large": ["26px", "36px"],
        "home-heading-large": ["48px", "56px"],
        "home-heading-small": ["28px", "34px"],
      },
    },
  },
});
