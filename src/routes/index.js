import express from "express";
import jobRoutes from "./application.routes.js";

const router = express.Router();

router.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.originalUrl}`);
  next();
});

router.use("/jobs", jobRoutes);

export default router;

