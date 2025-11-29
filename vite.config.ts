import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// IMPORTANT: put your repository name here
export default defineConfig({
  plugins: [react()],
  base: "/FireProtectorWebsite/",   // <-- your repo name exactly
});
