from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Transaction(BaseModel):
    id: int
    date: str
    description: str
    amount: float
    category: str

transactions: List[Dict] = []

@app.post("/transactions")
def add_transaction(t: Transaction):

    # Validar que ingresos sean positivos
    if t.category.lower() == "ingreso" and t.amount < 0:
        return {"error": "Los ingresos deben ser positivos."}

    # Validar que egresos sean negativos
    if t.category.lower() == "egreso" and t.amount > 0:
        return {"error": "Los egresos deben ser negativos."}

    transactions.append(t.dict())
    return {"message": "OK", "transaction": t}


@app.get("/transactions")
def list_transactions():
    return transactions

@app.get("/transactions/summary")
def summary():
    income = sum(t["amount"] for t in transactions if t["amount"] > 0)
    expense = sum(t["amount"] for t in transactions if t["amount"] < 0)
    net = income + expense
    return {
        "total_income": income,
        "total_expense": expense,
        "net_total": net
    }

@app.get("/transactions/summary_by_category")
def by_category():
    result = {}
    for t in transactions:
        result[t["category"]] = result.get(t["category"], 0) + t["amount"]
    return result
