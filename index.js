import http from 'http';
import nstatic from 'node-static';

const PORT = 3000;
const STATIC_DIR = 'static';

class ClientJsTest {
  static serve(staticPath) {
    if (typeof staticPath != 'undefined') {
      // use tester as a module
      console.log('running as a module');
      this.dirname = process.cwd() + '/' + staticPath;
    }
    else {
      // use tester standalone
      console.log('running standalone server');
      this.dirname = process.cwd() + '/' + STATIC_DIR;
    }
    const file = new(nstatic.Server)(this.dirname);
    http.createServer(function (req, res) {
      file.serve(req, res);
    }).listen(PORT);
  }
}

ClientJsTest.serve();

export default ClientJsTest;
