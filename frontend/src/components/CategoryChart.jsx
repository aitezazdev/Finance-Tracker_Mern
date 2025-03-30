import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const CategoryChart = ({ data }) => {
  const chartData = data.map(item => ({
    name: item._id.category,
    value: item.totalSpent
  })).sort((a, b) => b.value - a.value);

  return (
    <div className="text-center">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
          <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
          <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Amount"]} />
          <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;