import express from "express";
import { getMonsters, getMonster, deleteMonster, updateMonster, addMonster } from "../controllers/monster.controller.js";


const router = express.Router();

router.get("/", getMonsters);
router.get("/:id", getMonster);
router.post("/", addMonster);
router.delete("/:id", deleteMonster);
router.patch("/:id", updateMonster)

export default router;
