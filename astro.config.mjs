import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://ring013.github.io/my-blog',
  base: isProd ? '/my-blog/' : '/',
  build: {
    // 必要に応じて設定を変更
  },
});