import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@/index.css'
import App from '@/App.tsx'

// キャッシュや通信設定を管理するクライアントを作成
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 5分間はキャッシュを新鮮とみなし、再フェッチを控える（天気予報に最適）
      staleTime: 1000 * 60 * 5,
      // ウィンドウにフォーカスを戻した時の自動再取得をオフにする（お好みで）
      refetchOnWindowFocus: false,
    },
  },
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
