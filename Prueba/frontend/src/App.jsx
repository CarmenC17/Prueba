import { useState } from "react";
import Transactions from "./components/Transactions";
import Dashboard from "./components/Dashboard";

function App() {
  const [tab, setTab] = useState("transactions");

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Mini Dashboard Financiero</h1>
      <div style={{
        display: "flex",
        gap: "12px",
        background: "#d8d791ff",
        padding: "14px",
        borderRadius: "14px",
        marginBottom: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }}>
      <button
        className="equi-btn"
        style={{ background: tab === "transactions" ? "#EDE4FF" : "" }}
        onClick={() => setTab("transactions")}>
        Transacciones
      </button>
      <button
        className="equi-btn"
        style={{ background: tab === "dashboard" ? "#EDE4FF" : "" }}
        onClick={() => setTab("dashboard")}>
        Dashboard
      </button>
      </div>
      {tab === "transactions" ? <Transactions /> : <Dashboard />}
    </div>
  );
}

export default App;
