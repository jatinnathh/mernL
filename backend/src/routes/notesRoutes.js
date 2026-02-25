import express from "express";
const router = express.Router();
import {getAllNotes,createNote, updateNode,deleteNode,getNotebyID, cleanupDuplicates} from "../controllers/notesController.js"

router.get("/",getAllNotes)
router.get("/:id",getNotebyID)
router.post("/",createNote)
router.put("/:id",updateNode)
router.delete("/:id",deleteNode)
router.post("/admin/cleanup", cleanupDuplicates)
export default router