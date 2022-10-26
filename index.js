import http from 'http';
import fs from 'fs';


const PORT = 3000;
const STATIC_DIR = 'static';

class ClientJsPreview {
  static serve(staticPath) {
    this.dirname = process.cwd() + '/' + STATIC_DIR;
    const dirname = process.cwd() + '/' + STATIC_DIR;
    if (typeof staticPath != 'undefined') {
      // use tester as a module
      console.log('running as a module');
      this.dirname = process.cwd() + '/' + staticPath;
    }
    http.createServer(function (req, res) {
      if(req.url === "/"){
        fs.readFile("./static/index.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
      } else if(req.url.match("\.js$")){
        //var jsPath = path.join(dirname, 'js/', req.url);
        const jsPath = dirname + '/modules' + req.url;
        const fileStream = fs.createReadStream(jsPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "application/javascript"});
        fileStream.pipe(res);
      } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }
    }).listen(PORT);
  }
}


export default ClientJsPreview;
