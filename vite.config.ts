import i18nextLoader from '@kainstar/vite-plugin-i18next-loader';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: 'window',
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    i18nextLoader({ paths: ['./src/services/i18next/locales'] }),
  ],
  build: {
    outDir: 'build',
    // manifest: true,
    // rollupOptions: {
    //   // overwrite default .html entry
    //   input: './src/main.tsx',
    // },
  },
  server: {
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, './localhost-key.pem')),
    //   cert: fs.readFileSync(path.resolve(__dirname, './localhost.pem')),
    // },
    // Make sure the server is accessible over the local network
    host: '0.0.0.0',
    port: 3000,
  },
});
