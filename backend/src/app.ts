import express from "express";
import { config } from "dotenv";
import morgan from "morgan";

config();
const app = express();

//Middleware
app.use(express.json());

//Remove in production
app.use(morgan("dev"));

export default app;
