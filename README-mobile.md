# PearFit 手机 App 版本

这是一个可安装的 PWA 手机 App。当前目录里的 `index.html`、`manifest.webmanifest`、`service-worker.js` 和 `icons/` 是完整移动版文件。

## 本地预览

在 `pearfit-app` 目录启动静态服务器：

```powershell
node server.js 4173
```

然后打开：

```text
http://localhost:4173/
```

## 手机安装

手机安装需要通过 HTTPS 访问。部署到 GitHub Pages、Vercel、Netlify 或你的服务器后：

- Android：用 Chrome 打开网址，点“安装应用”或浏览器菜单里的“安装应用”。
- iPhone：用 Safari 打开网址，点分享按钮，选择“添加到主屏幕”。

## 后续上架

如果之后要做应用商店版本，可以用 Capacitor 把这个 PWA 包成 Android/iOS 原生壳，当前目录可以作为 Web 资源目录。
