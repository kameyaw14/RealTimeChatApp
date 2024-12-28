import express from "express";
import {
  LogIn,
  LogOut,
  SignUp,
  UpdateProfile,
} from "../controllers/auth.controller.js";
import { ProtectRoute } from "../middlewares/user_auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/signup", SignUp);
authRouter.post("/login", LogIn);
authRouter.post("/logout", LogOut);
authRouter.put("/update-profile", ProtectRoute, UpdateProfile);

export default authRouter;
