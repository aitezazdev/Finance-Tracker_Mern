import Expense from "../models/expense.model.js";
import User from "../models/user.model.js";

// create expense
const createExpense = async (req, res) => {
  try {
    const { amount, category, date } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "amount cannot be negative",
      });
    }
    if (!category) {
      return res.status(400).json({
        success: false,
        message: "category is required",
      });
    }

    const userID = req.user.id;

    const expense = await Expense.create({
      amount,
      category,
      date: date ?? new Date(),
      user: userID,
    });

    const user = await User.findById(userID);
    if (user) {
      user.expenses.push(expense._id);
      await user.save();
    }

    res.status(201).json({
      success: true,
      data: expense,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

// delete expense
const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "id is required",
      });
    }
    const expense = await Expense.findById(id);
    if (!expense) {
      return res.status(404).json({
        success: false,
        message: "Expense not found",
      });
    }

    await User.findByIdAndUpdate(expense.user, {
      $pull: { expenses: id },
    });

    await Expense.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Expense deleted successfully",
      data: expense,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

// get all expenses
const getExpenses = async (req, res) => {
  try {
    const userID = req.user.id;

    const expenses = await Expense.find({ user: userID });

    if (!expenses) {
      return res.status(404).json({
        success: false,
        message: "Expenses not found",
      });
    }

    res.status(200).json({
      success: true,
      data: expenses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong!",
    });
  }
};

export { createExpense, deleteExpense, getExpenses };
