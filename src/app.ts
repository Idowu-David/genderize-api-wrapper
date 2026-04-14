import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import cors from "cors";
import classifyRoute from "../src/routes/classify.route";

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/classify", classifyRoute);

app.listen(PORT, () => {
  console.log(`Classify server running on http://localhost:${PORT}`);
});

export default app;
