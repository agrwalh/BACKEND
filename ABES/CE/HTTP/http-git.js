const http = require('http');
const axios = require('axios');

const port = 3000;

const server = http.createServer(async (req, res) => {
    console.log('New request received');
    res.writeHead(200, { 'Content-Type': 'text/html' });

    try {
        const response = await axios.get("https://api.github.com/search/users", {
            params: {
                q: "location:ghaziabad"
            }
        });

        const userdata = response.data.items; 
        let frontdata = `<html><head></head><body>`;

        userdata.forEach((user) => {
            frontdata += `<div><img src="${user.avatar_url}" alt="User Avatar"></div>`;
        });

        frontdata += `</body></html>`;
        res.end(frontdata);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.end('<h1>Error fetching data</h1>');
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
