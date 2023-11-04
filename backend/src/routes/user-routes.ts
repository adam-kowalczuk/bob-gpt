import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user-controllers.js";
import { signupValidator, validate } from "../utils/validators.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), createUser);

export default userRoutes;
