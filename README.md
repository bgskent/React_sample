# 天気予報ダッシュボード（React + Vite + TypeScript）

気象庁の防災情報JSON（天気概況）を取得し、都道府県ごとにリアルタイムで切り替え表示するシングルページアプリケーション（SPA）です。
Docker を用いた開発環境構築、TanStack Query によるサーバー状態管理、Feature（機能）ベースのディレクトリ設計を採用しています。

## 主な機能

- **都道府県別の天気概況表示**: 気象庁の公開JSONデータから発表官署・発表日時・ヘッドライン・天気概況を取得して表示
- **キャッシュによる高速切り替え**: TanStack Query により一度取得したデータをメモリにキャッシュ（5分間 Fresh 維持）し、再選択時は待機時間ゼロで表示
- **SPAルーティング**: React Router によるページ遷移（ブラウザリロードなしの画面切り替え）

## 技術スタック

- **フロントエンド**: React 19, TypeScript, Vite
- **データ取得・キャッシュ管理**: TanStack Query (`@tanstack/react-query`)
- **ルーティング**: React Router (`react-router-dom`)
- **開発環境**: Docker, Docker Compose (Node.js 22 Alpine)

## ディレクトリ構成（Featureベース設計）

```text
.
├── Dockerfile
├── compose.yaml
├── vite.config.ts            # CORS回避プロキシ (/api-jma) および @/ パスエイリアス設定
├── tsconfig.app.json         # TypeScript パスエイリアス設定
└── src/
    ├── main.tsx              # エントリーポイント（QueryClientProvider 設定）
    ├── App.tsx               # ルーティング（BrowserRouter, Routes）と共通ナビゲーション
    ├── pages/                # ページ単位のコンポーネント
    │   ├── WeatherPage.tsx   # 天気予報表示ページ (/)
    │   └── AboutPage.tsx     # アプリ説明ページ (/about)
    └── features/
        └── weather/          # 天気予報機能（高凝集モジュール）
            ├── api/          # API通信関数 (getWeather.ts)
            ├── components/   # UIコンポーネント (PrefectureSelect.tsx, WeatherCard.tsx)
            ├── constants/    # マスターデータ (prefectures.ts)
            ├── hooks/        # カスタムフック (useWeather.ts)
            ├── types/        # 型定義 (weather.ts)
            └── index.ts      # 外部公開用バレルファイル
```

## 環境構築・起動方法（Docker）

ローカル環境に Node.js をインストールせず、Docker Compose のみで起動できます。

### 1. リポジトリのクローン
```bash
git clone <リポジトリのURL>
cd weather-dashboard
```

### 2. パッケージのインストール
```bash
docker compose run --rm web npm install
```

### 3. 開発サーバーの起動
```bash
docker compose up -d
```
起動後、ブラウザで `http://localhost:5173` にアクセスするとアプリが表示されます。

## よく使う開発コマンド

| 操作 | コマンド |
| :--- | :--- |
| **サーバーのログ確認** | `docker compose logs -f` |
| **コンテナの停止** | `docker compose down` |
| **コンテナの再起動**（`vite.config.ts` 変更時など） | `docker compose restart` |
| **パッケージの追加インストール** | `docker compose exec web npm install <パッケージ名>` |

## 設計上の工夫

- **CORSエラー対策**: 開発サーバー（Vite）の `server.proxy` 機能を利用し、`/api-jma` へのリクエストを `https://jma.go.jp` へ中継しています。
- **UI状態とサーバー状態の分離**: 選択中の都道府県コードは `useState`（UI State）、API通信・ローディング・エラー・キャッシュは TanStack Query（Server State）に責務を分離しています。
- **パスエイリアス**: `@/` を `src/` にマッピングし、階層が深くなっても相対パス（`../../`）を使わずにインポートできるよう統一しています。

