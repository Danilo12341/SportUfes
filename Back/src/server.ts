import "reflect-metadata";
import express from "express";
import ".";
import cors from 'cors';
import { routes } from "./routes/routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server is runing"));