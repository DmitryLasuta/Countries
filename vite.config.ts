import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

declare const __dirname: string

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',

  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@providers': path.resolve(__dirname, './src/providers'),
      '@redux': path.resolve(__dirname, './src/redux'),
    },
  },
})
