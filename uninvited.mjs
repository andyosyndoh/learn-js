import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const PORT = 5000;

const server = http.createServer(async (req, res) => {
    if (req.method === 'POST') {
        const guestName = req.url.slice(1);
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                const guestData = JSON.parse(body);
                const fileName = `${guestName}.json`;

                await fs.writeFile(fileName, JSON.stringify(guestData, null, 2));

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(guestData));
            } catch (error) {
                console.error('Error processing request:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'server failed' }));
            }
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});