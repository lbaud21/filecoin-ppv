import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

const envVariables = ["WEB3_STORAGE_API_KEY"];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin(envVariables)],
});
