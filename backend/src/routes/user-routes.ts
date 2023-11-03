import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user-controllers.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", createUser);

export default userRoutes;
