import express from "express"
import dbConnection from "./src/config/db.js";
import dotenv from "dotenv";
import authRouter from "./src/routes/auth.routes.js";
import expenseRouter from "./src/routes/expense.routes.js";
import summaryRouter from "./src/routes/summary.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.get("/", (req, res) => {
  res.send("Hello world");
})

app.use("/auth", authRouter);
app.use("/api", expenseRouter);
app.use("/api/summary", summaryRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});