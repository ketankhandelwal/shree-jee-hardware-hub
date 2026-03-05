import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Use a conditional base if needed, but '/' is usually fine
  base: "/", 
  server: {
host: true,
    port: 8080,
    strictPort: true,
    // This ensures the browser doesn't try to "guess" the content type incorrectly
    fs: {
      strict: false 
    }
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // It's safer to keep standard naming during troubleshooting
    // You can re-enable your custom rollupOptions once the dev server works
  },
}));