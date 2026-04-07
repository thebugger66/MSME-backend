export const calculateDecision = (data) => {
  const {
    name,
    pan,
    businessType,
    monthlyRevenue,
    loanAmount,
    tenure,
  } = data;

  let reasons = [];

  // 🔹 Validation
  if (!name || !pan || !monthlyRevenue || !loanAmount || !tenure) {
    throw new Error("Missing required fields");
  }

  if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan)) {
    reasons.push("Invalid PAN format");
  }

  //EMI Calculation
  const emi = loanAmount / tenure;

  //Ratios
  const emiToRevenue = emi / monthlyRevenue;
  const loanToRevenue = loanAmount / (monthlyRevenue * 12);

  // Score Calculation
  let score = 0;

  if (monthlyRevenue > 50000) score += 30;
  else reasons.push("Low revenue");

  if (emiToRevenue < 0.3) score += 30;
  else reasons.push("High EMI compared to revenue");

  if (loanToRevenue < 1) score += 40;
  else reasons.push("Loan amount too high");

  //Decision
  let decision = "Review";

  if (score >= 70) decision = "Approved";
  else if (score < 40) decision = "Rejected";

  return {
    decision,
    creditScore: score,
    reasons,
  };
};