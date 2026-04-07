
# MSME Credit Decision System

A full-stack mini system that evaluates MSME loan applications and generates a credit decision (Approved/Rejected) along with a credit score and reasoning.


## 🚀 Live Dem

🌐 Frontend: https://your-frontend.vercel.app,

🔗 Backend API: https://your-backend.onrender.com




##📦 Install Dependencies

Backend

```bash
  npm install express cors
```

Frontend

```bash
npm install
npm install axios
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
```
    
## 📌 Features

-✅ User / Business profile input,

-✅ Loan application form,

-✅ Credit decision engine,

-✅ Credit score generation,

-✅ Reason codes (why approved/rejected),

-✅ Error handling for invalid inputs,

-✅ Dockerized backend,

-✅ Deploy-ready architecture


## 🛠️ Tech Stack
Frontend

React (Vite)

Tailwind CSS

Axios

Backend

Node.js

Express.js

Deployment

Frontend: Vercel

Backend: Render (Docker)


## 📂 Project Structure

MSME-system/

│ ├── backend/

│ ├── server.js 

│ ├── Dockerfile 

│ └── package.json 

│ 
├── frontend/ 

│ ├── src/ 

│ ├── index.html 

│ └── package.json 

│ 
└── README.md
## 🔌 API Endpoints
#POST /api/apply-loan

#### 

```http
  POST /api/apply-loan
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api` | `string` | request loan |




## request body

Request Body
{
  "name": "ABC Traders",

  "pan": "ABCDE1234F",

  "businessType": "Retail",

  "monthlyRevenue": 50000,

  "loanAmount": 200000,

  "tenure": 12,

  "loanPurpose": "Expansion"

}

## response

{ "decision": "Approved",


 "creditScore": 78,

  "reasons": [] 
  
}




## 🧠 Decision Logic

The credit decision is based on simple rules:

1. Revenue vs EMI Ratio
EMI = Loan Amount / Tenure
If EMI > 50% of revenue → Reject
2. Loan Amount Check
Loan > 10x monthly revenue → Reject
3. Credit Score Calculation
Start with score = 100
Deduct points for:
High EMI
High loan amount
Missing/invalid data
4. Final Decision
Score > 60 → Approved
Score ≤ 60 → Rejected
⚠️ Assumptions
No database is used (in-memory processing)
PAN format is mocked
Simple logic is used (not real banking model)
No authentication implemented


## 🐳 Docker Setup

Build Image

docker build -t msme-backend .

Run Container

docker run -d -p 5000:5000 msme-backend
## ⭐ Conclusion

This project demonstrates a basic credit decision system with clean architecture, API design, and deployment-ready setup.
