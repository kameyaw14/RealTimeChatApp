import express from "express";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.lib.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log("server running on port:", PORT);
  connectDB();
});
