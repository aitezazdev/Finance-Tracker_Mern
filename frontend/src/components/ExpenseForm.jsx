import React, { useState } from "react";
import { addExpense } from "../api/expenseApi";

const ExpenseForm = ({ onClose, setExpenses }) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.amount) newErrors.amount = "Amount is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.date) newErrors.date = "Date is required";

    if (formData.amount && formData.amount <= 0) {
      newErrors.amount = "Amount must be greater than zero";
    }

    if (new Date(formData.date) > new Date()) {
      newErrors.date = "Date cannot be in the future";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await addExpense(formData);
      setExpenses((prevExpenses) => [response.data, ...prevExpenses]);

      setFormData({
        amount: "",
        category: "",
        date: "",
        description: "",
      });

      setErrors({});
      onClose();
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amount <span className="text-red-600">*</span>
        </label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
        />
      </div>
      <p className="mb-3">
        {errors.amount && <span className="text-red-500">{errors.amount}</span>}
      </p>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category <span className="text-red-600">*</span>
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all">
          <option value="">Select category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Health">Health</option>
          <option value="Shopping">Shopping</option>
          <option value="Others">Others</option>
        </select>
        <p className="mb-3">
          {errors.category && (
            <span className="text-red-500">{errors.category}</span>
          )}
        </p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date <span className="text-red-600">*</span>
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
        />
      </div>
      <p className="mb-3">
        {errors.date && <span className="text-red-500">{errors.date}</span>}
      </p>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <input
          type="text"
          name="description"
          autoComplete="off"
          value={formData.description}
          onChange={handleChange}
          placeholder="Optional description"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-3 rounded-xl shadow-lg hover:opacity-90 transition-all">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
