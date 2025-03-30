import axios from "axios"

const API_URL = "http://localhost:3000/api/summary";

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

// monthly summary
export const getMonthlySummary = async () => {
  const response = await api.get("/monthly");
  console.log(response.data);
  
  return response.data;
};

// category summary
export const getCategorySummary = async () => {
  const response = await api.get("/category");
  console.log(response.data);
  
  return response.data;
};

// spending trends
export const getSpendingTrends = async () => {
  const response = await api.get("/timeline");
  console.log(response.data);
  
  return response.data;
};