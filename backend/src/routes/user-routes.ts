import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user-controllers.js";
import {
  loginValidator,
  signupValidator,
  validate
} from "../utils/validators.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), createUser);
userRoutes.post("/login", validate(loginValidator), createUser);

export default userRoutes;
