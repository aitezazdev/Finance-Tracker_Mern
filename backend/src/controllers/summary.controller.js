import User from "../models/user.model.js";

// total income
const calculateIncome = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate("incomes");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    if (!user.incomes || user.incomes.length === 0) {
      return res.status(404).json({
        success: false,
        message: "no incomes found for this user",
      });
    }

    const totalIncome = user.incomes.reduce(
      (total, income) => total + income.amount,
      0
    );
    return res.status(200).json({
      success: true,
      data: totalIncome,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "something went wrong!",
    });
  }
};

// total expense
const calculateExpense = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate("expenses");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    if (!user.expenses || user.expenses.length === 0) {
      return res.status(404).json({
        success: false,
        message: "no expenses found for this user",
      });
    }

    const totalExpense = user.expenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
    return res.status(200).json({
      success: true,
      data: totalExpense,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "something went wrong!",
    });
  }
};

// net balance
const netBalance = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate("incomes").populate("expenses");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    if (!user.incomes || user.incomes.length === 0) {
      return res.status(404).json({
        success: false,
        message: "no incomes found for this user",
      });
    }

    if (!user.expenses || user.expenses.length === 0) {
      return res.status(404).json({
        success: false,
        message: "no expenses found for this user",
      });
    }

    const totalIncome = user.incomes.reduce(
      (total, income) => total + income.amount,
      0
    );
    const totalExpense = user.expenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
    return res.status(200).json(
      {
        success: true,
        data: totalIncome - totalExpense,
      }
    )
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "something went wrong!",
    })
  }
}

export { calculateIncome, calculateExpense, netBalance };
