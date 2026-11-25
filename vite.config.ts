import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // ★追加

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true,
    },
    // ★以下を追加：CORSエラー回避用のプロキシ設定
        proxy: {
      '/api-jma': {
        target: 'https://www.jma.go.jp',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-jma/, ''),
        // ★ブロック回避用にブラウザ風のUser-Agentを付与
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      },
    },
  },
})

