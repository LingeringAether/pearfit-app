# PearFit 部署说明

这个目录已经是可部署的静态 PWA，不需要安装依赖、不需要构建。

## 文件清单

- `index.html`：App 主页面。
- `manifest.webmanifest`：手机安装配置。
- `service-worker.js`：离线缓存。
- `icons/`：手机桌面图标。
- `vercel.json`：Vercel 部署配置。
- `netlify.toml` 和 `_headers`：Netlify 部署配置。
- `.nojekyll`：GitHub Pages 配置。
- `server.js`：本地预览服务器。

## Vercel 部署

1. 打开 Vercel，选择 Add New Project。
2. 上传或导入这个 `pearfit-app` 目录。
3. Framework Preset 选择 Other。
4. Build Command 留空。
5. Output Directory 留空或填 `.`。
6. Deploy 后得到 `https://...vercel.app` 网址。

## Netlify 部署

1. 打开 Netlify。
2. 选择 Add new site，然后拖拽上传这个 `pearfit-app` 文件夹，或连接 Git 仓库。
3. Publish directory 填 `.`。
4. Build command 留空。
5. Deploy 后得到 `https://...netlify.app` 网址。

## GitHub Pages 部署

1. 新建一个 GitHub 仓库。
2. 把这个目录里的所有文件放到仓库根目录。
3. 在仓库 Settings -> Pages 里选择 Deploy from a branch。
4. Branch 选择 `main`，目录选择 `/root`。
5. 保存后等待生成 `https://用户名.github.io/仓库名/`。

## iPhone 安装

部署完成后，在 iPhone 上用 Safari 打开 HTTPS 网址，点分享按钮，选择“添加到主屏幕”，名称填 `PearFit`。

## 本地预览

```powershell
cd C:\Users\Administrator\Documents\Codex\2026-06-26\wo\outputs\pearfit-app
node server.js 4173
```

然后打开：

```text
http://127.0.0.1:4173/
```
