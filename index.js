import http from 'http';
import nstatic from 'node-static';

const PORT = 3000;
const STATIC_DIR = 'static';

export default class ClientJsTest {
  constructor(staticPath) {
    const __dirname = process.cwd() + '/' + staticPath || process.cwd() + '/' + STATIC_DIR;
    const file = new(nstatic.Server)(__dirname);
    http.createServer(function (req, res) {
      file.serve(req, res);
    }).listen(PORT);
  }
}


