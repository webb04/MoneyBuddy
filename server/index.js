const PORT = 8080;
const HOST = "0.0.0.0";

var express = require("express");
var app = express();

app.get('/', function (req, res) {
    console.log(req);
    res.send('Hello World');
});

var server = app.listen(PORT, HOST, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});
