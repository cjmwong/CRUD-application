import { getMonstersFromRepo } from "../repositories/monster.repository.js"

export const getMonsters = async (req, res) => {
    try {
        const monsters = await getMonstersFromRepo();
        res.status(200).send(monsters);
    } catch (e) {
        res.status(500).send(e.message, 'failed to fetch list of monsters');
    }
}
