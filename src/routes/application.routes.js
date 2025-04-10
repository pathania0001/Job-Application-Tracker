import express from "express";
import { Controller } from "../controllers/index.js";

const router = express.Router();

router.post("/", Controller.Application.addJob);
router.get("/", Controller.Application.getJobs);
router.get("/:id", Controller.Application.getJobById);
router.put("/:id", Controller.Application.updateJob);
router.delete("/:id", Controller.Application.deleteJob);

export default router;
// router.use((req, res, next) => {