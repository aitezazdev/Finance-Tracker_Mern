import React, { useState } from "react";
import { deleteExpense } from "../api/expenseApi";

const ExpenseList = ({ expenses, setExpenses }) => {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEdit = (expense) => {
    setEditingId(expense.id);
    setEditData({ ...expense });
  };

  const handleSave = () => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === editingId ? editData : expense
      )
    );
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleDelete = async (id) => {
    try {
      await deleteExpense(id);

      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense._id !== id)
      );

      console.log(`Expense with ID ${id} deleted successfully`);
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <table className="min-w-full bg-white rounded-lg">
        <thead className="bg-gray-900 text-white text-lg uppercase">
          <tr className="text-center">
            <th className="py-4 px-6">📅 Date</th>
            <th className="py-4 px-6">📂 Category</th>
            <th className="py-4 px-6">📝 Description</th>
            <th className="py-4 px-6">💵 Amount ($)</th>
            <th className="py-4 px-6">⚙️ Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-md">
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="5" className="py-6 text-center text-gray-500">
                No expenses recorded yet.
              </td>
            </tr>
          ) : (
            expenses.map((expense, index) => (
              <tr
                key={expense._id}
                className={`border-b transition ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200`}>
                {editingId === expense.id ? (
                  <>
                    <td className="py-4 px-4 text-center">
                      <input
                        type="date"
                        value={editData.date}
                        onChange={(e) =>
                          setEditData({ ...editData, date: e.target.value })
                        }
                        className="w-full px-3 py-2 border rounded"
                      />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <select
                        value={editData.category}
                        onChange={(e) =>
                          setEditData({ ...editData, category: e.target.value })
                        }
                        className="w-full px-3 py-2 border rounded">
                        <option value="Food">🍔 Food</option>
                        <option value="Transport">🚕 Transport</option>
                        <option value="Entertainment">🎬 Entertainment</option>
                        <option value="Bills">📜 Bills</option>
                        <option value="Others">📌 Others</option>
                      </select>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <input
                        type="text"
                        value={editData.description}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            description: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border rounded"
                      />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <input
                        type="number"
                        value={editData.amount}
                        onChange={(e) =>
                          setEditData({ ...editData, amount: e.target.value })
                        }
                        className="w-full px-3 py-2 border rounded text-center"
                      />
                    </td>
                    <td className="py-4 px-6 flex justify-center space-x-2">
                      <button
                        onClick={handleSave}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition">
                        ✅ Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded transition">
                        ❌ Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="py-4 px-4 text-center">
                      {new Date(expense.date)
                        .toLocaleDateString("en-GB")
                        .replace(/\//g, "-")}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {expense.category}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {expense.description || "—"}
                    </td>
                    <td className="py-4 px-4 text-center font-semibold">
                      ${expense.amount}
                    </td>
                    <td className="py-4 px-6 flex justify-center space-x-2">
                      <button
                        onClick={() => handleEdit(expense)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(expense._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition">
                        🗑️ Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
