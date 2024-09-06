import 'dotenv/config';
import cors from 'cors';
import express from 'express';

export class Server {
    server = express();
    port: string | number

    constructor() {
        this.server = express();
        this.port = process.env.PORT || 3000;
        this.setMiddlewares();
        this.setConfigureServer();
    }

    setMiddlewares() {
        this.server.use(express.json());
        this.server.use(cors());
        this.server.use(express.urlencoded({ extended: true }));
    }

    setConfigureServer() {
        this.server.listen(this.port, () => {
            console.log("SERVER RUNNING IN PORT", this.port);
        })
    }
}