import { connectDB } from "./database/database.js";
import Monsters from "./models/monster.model.js";
import fetch from "node-fetch";

connectDB();

const inputMonsters = async () => {
    const response = await fetch("https://gist.githubusercontent.com/mrchenliang/e438f666d121261b74abcd70a5f938d8/raw/a8f14ee5097fe2ab4f78798307d2dd3dcb0dcd3a/monsters.json");
    const monsters = await response.json();
    for (var monster of monsters) {
        var addedMonster = new Monsters(monster);
        addedMonster.save();
    }
}

inputMonsters();
