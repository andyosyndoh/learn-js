import http from 'http';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const PORT = 5000;


const requestListener = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const guestName = req.url.slice(1);

            if (!guestName) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'server failed' }));
                return;
            }

            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });

            req.on('end', async () => {
                try {
                    const guestData = JSON.parse(body);

                    const guestFilePath = join('./guests', `${guestName}.json`);

                    await writeFile(guestFilePath, JSON.stringify(guestData, null, 2), 'utf-8');

                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(guestData));
                } catch (error) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'server failed' }));
                }
            });
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'server failed' }));
        }
    } else {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
    }
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
