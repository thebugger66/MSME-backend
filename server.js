import express from "express";
import cors from "cors";
import decisionRoutes from "./routes/decisionRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", decisionRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});