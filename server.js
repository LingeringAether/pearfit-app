const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.argv[2] || 4173);
const root = __dirname;
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".md": "text/markdown; charset=utf-8"
};

http.createServer((request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const cleanPath = decodeURIComponent(requestUrl.pathname).replace(/^\/+/, "");
  const requested = path.resolve(root, cleanPath || "index.html");

  if (!requested.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  const filePath = fs.existsSync(requested) && fs.statSync(requested).isDirectory()
    ? path.join(requested, "index.html")
    : requested;

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
    response.end(data);
  });
}).listen(port, "127.0.0.1", () => {
  console.log(`PearFit preview: http://127.0.0.1:${port}/`);
});
