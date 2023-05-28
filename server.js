const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const makanan = require('./pages/data/dataMakanan');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === '/a' || pathname === '/b') {
      app.render(req, res, pathname, parsedUrl.query);
    } else if (pathname === '/api/makanan') {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(makanan));
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`Server berjalan pada http://localhost:${port}`);
  });
});
