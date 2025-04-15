

## 使用方法

1. 开发时使用 Astro 的开发服务器：
```bash
pnpm run dev
```

2. 构建并部署到 Cloudflare：
```bash
pnpm run deploy
```

3. 如果你想在部署前预览：
```bash
pnpm run build
pnpm run preview
```

然后确认无误后：
```bash
wrangler pages deploy dist
```

这样你就可以利用 Astro 的构建能力和 Wrangler 的部署功能，将你的博客部署到 Cloudflare 的基础设施上。