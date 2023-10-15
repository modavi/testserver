const { error } = require("console");
const http = require("http");
const url = require('url');

const host = '0.0.0.0';
const port = 8000;

const requestListener = function (req, res) {
    var query = url.parse(req.url,true).query;
    

    res.writeHead(200);

    if(query['crash'])
    {
        res.end("CRASH");
        throw error("BAD THINGS HAPPENED")
    }
    else
    {
        res.end("My first server!");
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});