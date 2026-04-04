// server.js
import app from "./app.js";
import dotenv from 'dotenv';
import path from 'path'
import {fileURLToPath} from 'url'
import * as fs from "node:fs";

if (process.env.LISTEN_FDS) {
    app.listen({ fd: 3 }, () => {
        console.log('Started via systemd socket');
    });
} else {
    let port
    let address

    if (process.env.NODE_ENV === 'development') {
        const __dirname = path.dirname(fileURLToPath(import.meta.url))

        dotenv.config({
            path: path.resolve(__dirname, '../../.env_app')
        })

        port = parseInt(process.env.APP_PORT);
        address = process.env.APP_ADDRESS;
    } else {
        const config = JSON.parse(
            fs.readFileSync('/etc/mywebapp/config.json', 'utf-8')
        );

        port = config.app.port
        address = config.app.host
    }

    app.listen(port, address, () => {
        console.log(`Started on ${address}:${port}`);
    });
}

