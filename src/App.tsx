// src/App.tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { WeatherPage } from '@/pages/WeatherPage';
import { AboutPage } from '@/pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>天気予報ダッシュボード</h1>

        {/* 全ページ共通のナビゲーションメニュー */}
        <nav style={{ marginBottom: '24px', paddingBottom: '12px', borderBottom: '2px solid #eee', display: 'flex', gap: '16px' }}>
          <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#0066cc' }}>
            天気予報
          </Link>
          <Link to="/about" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#0066cc' }}>
            このアプリについて
          </Link>
        </nav>

        {/* URLに応じて中身だけを差し替えるエリア */}
        <Routes>
          <Route path="/" element={<WeatherPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

