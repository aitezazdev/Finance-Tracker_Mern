import express from "express";
import createExpense from "../controllers/expense.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const expenseRouter = express.Router();

expenseRouter.post("/create-expense", authMiddleware, createExpense);

export default expenseRouter;