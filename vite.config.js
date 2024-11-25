import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // 设置根目录
  build: {
    rollupOptions: {
      input: './index.html' // 确保入口文件正确
    },
    commonjsOptions: {
      include: []
    }
  }
});

