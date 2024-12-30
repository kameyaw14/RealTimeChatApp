import express from "express";
import { ProtectRoute } from "../middlewares/user_auth.middleware.js";
import { GetUsersForSidebar } from "../controllers/message.controller.js";

const messageRouter = express.Router();

messageRouter.get("/users", ProtectRoute, GetUsersForSidebar);

export default messageRouter;
