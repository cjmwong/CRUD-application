import Monsters from "../models/monster.model.js";

export const getMonstersFromRepo = async (query) => {
    try {
        const monsters = await Monsters.find(query);
        return monsters;
    } catch (e) {
        throw Error("Error fetching monsters");
    }
}
