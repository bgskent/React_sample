FROM node:22-alpine

WORKDIR /app

# コンテナ起動時に外部（ホスト側ブラウザ）からアクセスできるよう --host を付与
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

