import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const pages = ['programs', 'about', 'parents', 'faq', 'contact'];

export default defineConfig({
  appType: 'mpa',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        ...Object.fromEntries(pages.map((page) => [page, resolve(process.cwd(), page, 'index.html')])),
      },
    },
  },
});
