import express from "express";
import { Request, Response} from "express";
import {createConnection} from "typeorm";
var bodyParser = require('body-parser')
const {
	resolve
} = require('path')
import cors from 'cors'
import {User} from "./app/entity/User";
const port = 3003


createConnection({
    // url - Connection url where perform connection to. Please note that other connection options will override parameters set from url.
    // debug: true,
    type: 'mysql',
    charset: "utf8mb4",
    extra: {
        charset: "utf8mb4",
    },
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'qwerty',
    // name: 'development',
    database: 'myapp',
    logging: ['query', 'schema', 'error'],
    dropSchema: true,
    synchronize: true,
    entities: [resolve(__dirname, 'app/entity/**/*{.ts,.js}')],
    // migrations: [resolve(__dirname, 'app/migration/**/**{.ts,.js}')],
}).then(connection => {
    const userRepository = connection.getRepository(User);

    // create and setup express app
    const app = express();

    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use(bodyParser.json());
	app.use(cors({ origin: true }))

    // register routes

    app.get("/users", async function(req: Request, res: Response) {
        // const { take, skip } = req.body;
        const users = await userRepository.find({
            // take,
            // skip
        });
        res.json(users);
    });

    app.get("/users/:id", async function(req: Request, res: Response) {
        const results = await userRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.post("/users", async function(req: Request, res: Response) {
        const user = await userRepository.create(req.body);
        const results = await userRepository.save(user);
        return res.send(results);
    });

    app.put("/users/:id", async function(req: Request, res: Response) {
        const user = await userRepository.findOne(req.params.id) as User;
        userRepository.merge(user, req.body);
        const results = await userRepository.save(user as User);
        return res.send(results);
    });

    app.delete("/users/:id", async function(req: Request, res: Response) {
        const results = await userRepository.delete(req.params.id);
        return res.send(results);
    });

    // start express server
    app.listen(port);
});