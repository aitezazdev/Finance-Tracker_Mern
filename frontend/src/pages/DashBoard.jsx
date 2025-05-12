import React, { useEffect, useState } from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseModal from "../components/ExpenseModal";
import ExpenseFilter from "../components/ExpenseFilter";
import { getExpenses } from "../api/expenseApi";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
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
        console.log("Expenses fetched:", response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
        setExpenses([]);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="flex pt-16 min-h-screen bg-gray-100">

      <Sidebar setShowModal={setShowModal}/>
      
      <div className="ml-64 flex-1 p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Your Expenses
          </h1>
        </div>
        <ExpenseFilter filter={filter} setFilter={setFilter} />
        <ExpenseList expenses={filteredExpenses} setExpenses={setExpenses} />
        <ExpenseModal
          show={showModal}
          onClose={() => setShowModal(false)}
          setExpenses={setExpenses}
        />
      </div>
    </div>
  );
};

export default Dashboard;