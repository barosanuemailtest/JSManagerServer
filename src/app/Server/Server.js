import { createServer } from 'http';

export class Server {

    startServer() {
        createServer(async (req, res) => {
            res.write('Hello!');
            res.end()
        }).listen(8080);
        console.log('server started');
    }
}