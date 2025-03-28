// src/pages/SummaryPage.js
import React from "react";
import SummaryChart from "../components/SummaryChart";

const SummaryPage = () => {
  const dummyExpenses = [
    { id: 1, amount: 50, category: "Food", date: "2023-03-01", description: "Lunch at cafe" },
    { id: 2, amount: 120, category: "Transport", date: "2023-03-02", description: "Metro pass" },
    { id: 3, amount: 80, category: "Entertainment", date: "2023-03-03", description: "Movie tickets" },
    { id: 4, amount: 30, category: "Food", date: "2023-03-04", description: "Snacks" },
    { id: 5, amount: 200, category: "Bills", date: "2023-03-05", description: "Electricity bill" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Expense Summary</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <SummaryChart expenses={dummyExpenses} />
      </div>
    </div>
  );
};

export default SummaryPage;
