import { calculateDecision } from "../services/decisionService.js";

export const processLoan = (req, res) => {
  try {
    const result = calculateDecision(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};