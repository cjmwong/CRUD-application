import express from "express";
import bodyParser from "body-parser";
import monsters from "./routes/monster.route.js"
import { connectDB } from "./database/database.js";

const app = express();
const port = 10000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

connectDB();

app.use("/monster", monsters)

app.listen(port, () =>{
    console.log("Listening on Port 10000.");
});
