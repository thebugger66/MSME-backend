import express from "express";
import { processLoan } from "../controllers/decisionController.js";

const router = express.Router();

router.post("/apply-loan", processLoan);

export default router;