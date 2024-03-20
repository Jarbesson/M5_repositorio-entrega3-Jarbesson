// import "reflect-metadata"
import "dotenv/config"
import "express-async-errors"
import express, { json } from "express";
import helmet from "helmet"
import { carRouter } from "./routes/car.routes";
import { HandleErrors } from "./middlewares/handleErrors.error";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/cars", carRouter);

app.use(HandleErrors.execute);

