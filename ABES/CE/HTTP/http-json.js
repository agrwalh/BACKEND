const http = require('http');
const fs = require('fs/promises'); 

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const filedata = await fs.readFile('/Volumes/HARSH/BACKEND/ABES/CE/HTTP/aa.json', 'utf-8');
    const parsedata=JSON.parse(filedata);
    res.end(JSON.stringify(parsedata));

    // res.end(filedata);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
