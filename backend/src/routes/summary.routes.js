import express from "express";
import { getMonthlySummary } from "../controllers/summary.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const summaryRouter = express.Router();

summaryRouter.post("/monthly", authMiddleware, getMonthlySummary);

export default summaryRouter;