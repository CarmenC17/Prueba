import { useEffect, useState } from "react";

function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);  

  const API = "http://localhost:8000";

   const loadSummary = async () => {
   const res = await fetch(`${API}/transactions/summary`);
   const data = await res.json();
    setSummary(data);
    setLoading(false);
   };

  useEffect(() => {
    loadSummary();
  }, []);

  return (
    <div className="equi-card">
      <h2 className="equi-title">Resumen Financiero</h2>

      {loading && <p>Cargando...</p>}

      {!loading && summary && (
        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
            <strong>Ingresos:</strong> Q{summary.total_income}
          </div>
          <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
            <strong>Egresos:</strong> Q{summary.total_expense}
          </div>
          <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
            <strong>Neto:</strong> Q{summary.net_total}
          </div>
        </div>
      )}

      <h3>Reporte BI (Looker Studio)</h3>

      <iframe
        src="https://lookerstudio.google.com/embed/reporting/99a52a25-b8b8-4dd6-a7e3-54c77e43812a/page/K0HhF"
        style={{ width: "100%", height: "600px", border: "none" }}
        allowFullScreen
        ></iframe>
    </div>
  );
}

export default Dashboard;
