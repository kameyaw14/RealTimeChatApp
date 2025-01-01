import express from "express";
import { ProtectRoute } from "../middlewares/user_auth.middleware.js";
import {
  GetMessages,
  GetUsersForSidebar,
  SendMesasges,
} from "../controllers/message.controller.js";

const messageRouter = express.Router();

messageRouter.get("/users", ProtectRoute, GetUsersForSidebar);
messageRouter.get("/:id", ProtectRoute, GetMessages);

messageRouter.post("/send/:id", ProtectRoute, SendMesasges);

export default messageRouter;
