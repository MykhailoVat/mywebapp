import express from "express";
import getUserRouter from "./routes/tasksRoutes.js";
//import taskRouter from "./routes/tasksRoutes.js";
//import profileRouter from "./routes/profilesRoutes.js";

const app = express();

app.set("query parser", "extended");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", getUserRouter());

export default app;
