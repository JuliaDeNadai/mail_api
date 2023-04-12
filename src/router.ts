import express from "express";
import { router_v1 } from "./v1/endpoints/index";

const router = express();

router.use("/v1", router_v1)

export default router;