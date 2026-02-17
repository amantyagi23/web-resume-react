import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE"); // Load .env variables prefixed with VITE_

  return {
    base: "/",
    define: {
      "process.env": { ...process.env, ...env }, // Merge Vite environment variables
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      sourcemap: true,
      commonjsOptions: {
        sourceMap: true,
      },
    },

    preview: {
      port: parseInt(env.VITE_PORT) || 5174,
    },
    server: {
      host: "0.0.0.0",
      origin: "127.0.0.1",
      port: parseInt(env.VITE_PORT) || 5173, // Use VITE_PORT or default to 5173
      allowedHosts: true,
    },
  };
});
