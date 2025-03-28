import React from "react";

const ExpenseFilter = ({ filter, setFilter }) => {
  const handleCategoryChange = (e) => {
    setFilter({ ...filter, category: e.target.value });
  };

  const handleDateChange = (e) => {
    setFilter({ ...filter, date: e.target.value });
  };

  const resetFilters = () => {
    setFilter({ category: "", date: "" });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-md">
      <div className="flex space-x-4">
        <select
          value={filter.category}
          onChange={handleCategoryChange}
          className="px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="">📂 All Categories</option>
          <option value="Food">🍔 Food</option>
          <option value="Transport">🚕 Transport</option>
          <option value="Entertainment">🎬 Entertainment</option>
          <option value="Bills">📜 Bills</option>
          <option value="Others">📌 Others</option>
        </select>

        <input
          type="date"
          value={filter.date}
          onChange={handleDateChange}
          className="px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      <button
        onClick={resetFilters}
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-3 rounded-lg transition mt-3 sm:mt-0"
      >
        🔄 Reset Filters
      </button>
    </div>
  );
};

export default ExpenseFilter;
