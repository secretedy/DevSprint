import express from "express";
import { verifyToken } from "../middleware/authMiddleware";
import { createProject, getProjects } from "../controllers/projectController";

const router = express.Router();

router.post("/", verifyToken, createProject);
router.get("/", verifyToken, getProjects);

export default router;
