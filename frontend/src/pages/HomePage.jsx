import React, { useState } from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseModal from "../components/ExpenseModal";
import ExpenseFilter from "../components/ExpenseFilter";

const HomePage = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, amount: 50, category: "Food", date: "2023-03-01", description: "Lunch at cafe" },
    { id: 2, amount: 120, category: "Transport", date: "2023-03-02", description: "Monthly metro pass" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState({ category: "", date: "" });

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
    setShowModal(false);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (filter.category ? expense.category === filter.category : true) &&
           (filter.date ? expense.date === filter.date : true);
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8 relative">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">📊 Your Expenses</h1>
        <button 
          onClick={() => setShowModal(true)}
          className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-medium shadow-lg transition"
          title="Add Expense"
        >
          <span className="text-xl">➕</span>
          <span>Add New Expense</span>
        </button>
      </div>
      <ExpenseFilter filter={filter} setFilter={setFilter} />
      <ExpenseList expenses={filteredExpenses} />
      <ExpenseModal show={showModal} onClose={() => setShowModal(false)} addExpense={addExpense} />
    </div>
  );
};

export default HomePage;
