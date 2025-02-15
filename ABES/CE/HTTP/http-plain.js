const http = require('http');
const fs = require('fs/promises'); 

const server = http.createServer(async (req, res) => { 
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hello</h1>")

    const data = await fs.readFile("/Volumes/HARSH/FSD 6sem/ABES/CE/HTTP/home..html", "utf-8"); 
    res.end(data);
});

PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
