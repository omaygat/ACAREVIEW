import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


import documentsRouter from "./routes/documents.js";
import usersRouter from "./routes/users.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/documents", documentsRouter);
app.use("/api/users", usersRouter);

export default app;
