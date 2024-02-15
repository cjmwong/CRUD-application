import { getMonstersFromRepo, deleteMonsterFromRepo, updateMonsterInRepo, createMonsterInRepo } from "../repositories/monster.repository.js"


/**
 * Get list of all monsters from to repository
 */
export const getMonsters = async (req, res) => {
    try {
        const monsters = await getMonstersFromRepo();
        res.status(200).send(monsters);
    } catch (e) {
        res.status(500).send(e.message, 'failed to fetch list of monsters');
    }
};

/**
 * Search and fetches monster in repository by id
 */
export const getMonster = async (req, res) => {
    const { id } = req.params;
    try {
        const monster = await getMonstersFromRepo({id: id});
        res.status(200).send(monster);
    } catch (e) {
        res.status(500).send(e.message, `failed to fetch monster ${id}`);
    }
};

/**
 * Add a monster to the repository
 */
export const addMonster = async (req, res) => {
    const { body } = req;
    try {
        const monster = await createMonsterInRepo(body);

        res.status(200).send(monster);
    } catch (e) {
        res.status(500).send(e.message, `failed to create monster`);
    }
}


/**
 * Searches for monster by id and updates specified parameters
 */
export const updateMonster = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const monster = await updateMonsterInRepo({ id: id }, body);
        res.status(200).send(monster);
    } catch (e) {
        res.status(500).send(e.message, `failed to update monster ${id}`);
    }
};


/**
 * Searches for monster by id and deletes if found
 */
export const deleteMonster = async (req, res) => {
    const { id } = req.params;
    try {
        const monster = await deleteMonsterFromRepo({id: id})
        if (monster) {
            res.status(204).send();
        } else {
            res.status(404).send(e.message, `failed to delete monster ${id}`);
        };
    } catch (e) {
        res.status(500).send(e.message, `failed to delete monster ${id}`);
    }
};
