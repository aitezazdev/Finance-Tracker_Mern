import express from "express";
import { calculateIncome, calculateExpense, netBalance } from "../controllers/summary.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const summaryRouter = express.Router();

summaryRouter.get("/incomes-report", authMiddleware, calculateIncome);
summaryRouter.get("/expenses-report", authMiddleware, calculateExpense);
summaryRouter.get("/net-balance-report", authMiddleware, netBalance);

export default summaryRouter;
