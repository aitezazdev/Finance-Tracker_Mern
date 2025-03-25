import express from "express";
import {createExpense, deleteExpense, getExpenses} from "../controllers/expense.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const expenseRouter = express.Router();

expenseRouter.post("/create-expense", authMiddleware, createExpense);
expenseRouter.post("/delete-expense/:id", authMiddleware, deleteExpense);
expenseRouter.post("/get-expenses", authMiddleware, getExpenses);

export default expenseRouter;