var http = require('http');
var fs = require('fs');


//server code for req
var server = http.createServer(function (req, res) {
//---------------------------------------------------------GET
    if (req.method === "GET") {
      if(req.url == "/"){
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("index.html", "UTF-8").pipe(res);
      res.end("hello");
      } else{
        res.writeHead(200, { "Content-Type": "text/html" });
      //  fs.createReadStream("404.html", "UTF-8").pipe(res);
        }
    } 
    //---------------------------------------------------- post    
    else if (req.method === "POST") {
    
        var body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            console.log(body)
            if(body === "data=123"){
            res.end(body);
            }
            else{
            res.end("hello");
            }
        });
    }

}).listen(8080);
