// src/pages/AboutPage.tsx
export function AboutPage() {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', backgroundColor: '#f0f8ff' }}>
      <h2>このアプリについて（SPAの動作確認）</h2>
      <p>
        このページは React Router を使って切り替えられています。
      </p>
      <ul>
        <li>上のナビゲーションをクリックしても、ブラウザのリロード（再読み込み）は発生しません。</li>
        <li>「天気予報」ページに戻ると、先ほど取得した天気データがキャッシュから即座に表示されます。</li>
      </ul>
    </div>
  );
}

