import http from 'http';
import { readFile } from 'fs/promises';
import { join } from 'path';

const PORT = 5000;

const requestListener = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const guestName = req.url.slice(1);

            if (!guestName) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'guest not found' }));
                return;
            }

            const guestFilePath = join('./guests', `${guestName}.json`);

            const fileContent = await readFile(guestFilePath, 'utf-8');
            const guestData = JSON.parse(fileContent);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(guestData));

        } catch (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'guest not found' }));
            } else {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'server failed' }));
            }
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'guest not found' }));
    }
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
