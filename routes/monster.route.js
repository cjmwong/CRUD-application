import express from "express";
import { getMonsters } from "../controllers/monster.controller.js";


const router = express.Router();

router.get("/", getMonsters);
/*
router.post("/", addMonster);

router.put("/", updateMonster)

router.delete("/", deleteMonster);
*/

export default router;
