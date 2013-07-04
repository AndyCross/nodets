///<reference path='../typescript-node-definitions/node.d.ts'/>
///<reference path='../typescript-node-definitions/mongodb.d.ts'/>
///<reference path='../typescript-node-definitions/express3.d.ts'/>
///<reference path='../typescript-node-definitions/consolidate.d.ts'/>

import http = module('http');

class Server
{
  run()
  {
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World via TypeScript\n');
    }).listen(1337, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:1337');
  }

}

var svr = new Server();
svr.run();