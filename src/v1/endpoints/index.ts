import express from "express";
import { routerMail } from "./mail";

const router_v1 = express();

router_v1.use("/mail", routerMail)

export {router_v1};