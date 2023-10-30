import express from "express";
import { config } from "dotenv";

config();
const app = express();

//Middleware
app.use(express.json());

//Connection
app.listen(8080, () => console.log("Server running on PORT 8080"));
