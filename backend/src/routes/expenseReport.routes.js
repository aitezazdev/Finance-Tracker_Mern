import express from "express";
import { getCategorySummary, getMonthlySummary, getSpendingTrends } from "../controllers/expenseReport.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const expenseReportRouter = express.Router();

expenseReportRouter.get("/monthly", authMiddleware, getMonthlySummary);
expenseReportRouter.get("/category", authMiddleware, getCategorySummary);
expenseReportRouter.get("/timeline", authMiddleware, getSpendingTrends);

export default expenseReportRouter;