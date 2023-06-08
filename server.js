const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const makanan = require("./pages/data/dataMakanan");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === "/") {
      // Tambahkan log atau pernyataan lain untuk memastikan penanganan halaman utama tercapai
      console.log('Halaman utama ditangani');

      // Tambahkan kode untuk menampilkan halaman utama
      app.render(req, res, "/", parsedUrl.query);
    } else if (pathname === "/api/makanan") {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(makanan));
    } else {
      handle(req, res, parsedUrl);
    }
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server berjalan pada http://localhost:${port}`);
  });
});
