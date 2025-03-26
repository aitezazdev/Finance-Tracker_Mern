import express from "express";
import { getCategorySummary, getMonthlySummary, getSpendingTrends } from "../controllers/summary.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const summaryRouter = express.Router();

summaryRouter.post("/monthly", authMiddleware, getMonthlySummary);
summaryRouter.post("/category", authMiddleware, getCategorySummary);
summaryRouter.post("/timeline", authMiddleware, getSpendingTrends);

export default summaryRouter;