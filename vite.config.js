import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const isVercel = process.env.VERCEL === "1";

  return {
    plugins: [react()],
    base:
      command === "serve" ? "/" : isVercel ? "/" : "/goit-react-hw-08/",
  };
});
