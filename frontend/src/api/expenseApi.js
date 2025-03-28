import axios from "axios";

const API_URL = "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


// get expenses
export const getExpenses = async () => {
  const response = await api.get("/get-expenses");
  console.log(response.data);
  
  return response.data;
};


// create an expense
export const addExpense = async (expense) => {
  const response = await api.post("/create-expense", expense);
  console.log(response.data);
  return response.data;
}