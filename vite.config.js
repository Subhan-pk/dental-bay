import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Vercel serves from the domain root, so the default base ("/") is correct there.
  // GitHub Pages serves project sites under /<repo-name>/, set via `npm run build:pages`.
  base: process.env.GH_PAGES ? "/dental-bay/" : "/",
  plugins: [react(), tailwindcss()],
});
