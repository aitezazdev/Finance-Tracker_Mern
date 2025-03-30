import express from "express";
import { getCategorySummary, getMonthlySummary, getSpendingTrends } from "../controllers/summary.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const summaryRouter = express.Router();

summaryRouter.get("/monthly", authMiddleware, getMonthlySummary);
summaryRouter.get("/category", authMiddleware, getCategorySummary);
summaryRouter.get("/timeline", authMiddleware, getSpendingTrends);

export default summaryRouter;