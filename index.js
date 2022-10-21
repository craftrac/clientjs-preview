import http from 'http';
import nstatic from 'node-static';

const PORT = 3000;
const STATIC_DIR = 'static';
const __dirname = process.cwd() + '/' + STATIC_DIR;
var file = new(nstatic.Server)(__dirname);

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(PORT);
