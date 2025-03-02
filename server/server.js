import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.lib.js";
import cookieParser from "cookie-parser";
import messageRouter from "./routes/message.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:5174",
];

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

app.listen(PORT, () => {
  console.log("server running on port:", PORT);
  connectDB();
});
