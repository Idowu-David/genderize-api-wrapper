import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import cors from "cors";
import classifyRoute from "../src/routes/classify.route";

const app: Application = express();
const PORT = parseInt(process.env.PORT || "5000", 10);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API IS LIVE");
});

app.use("/api/classify", classifyRoute);

// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`Server running on port ${PORT}`);
// });
export default app;
