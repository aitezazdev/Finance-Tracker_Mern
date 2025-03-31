import React, { useEffect, useState } from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseModal from "../components/ExpenseModal";
import ExpenseFilter from "../components/ExpenseFilter";
import { getExpenses } from "../api/expenseApi";

const HomePage = () => {
  const [expenses, setExpenses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState({ category: "", sortByAmount: "" });

  const filteredExpenses = expenses
    .filter((expense) =>
      filter.category ? expense.category === filter.category : true
    )
    .sort((a, b) => {
      if (filter.sortByAmount === "asc") return a.amount - b.amount;
      if (filter.sortByAmount === "desc") return b.amount - a.amount;
      return 0;
    });

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await getExpenses();
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
        setExpenses([]);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 relative pt-24 sm:pt-24">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">📊 Your Expenses</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full text-base sm:text-lg font-medium shadow-lg transition w-full sm:w-auto"
          title="Add Expense">
          <span className="text-xl">➕</span>
          <span>Add New Expense</span>
        </button>
      </div>
      <ExpenseFilter filter={filter} setFilter={setFilter} />
      <ExpenseList expenses={filteredExpenses} setExpenses={setExpenses} />
      <ExpenseModal
        show={showModal}
        onClose={() => setShowModal(false)}
        setExpenses={setExpenses}
      />
    </div>
  );
};

export default HomePage;