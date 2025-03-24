import Expense from "../models/expense.model.js";
import User from "../models/user.model.js";

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

export default createExpense;
