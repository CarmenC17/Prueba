import { useEffect, useState } from "react";

const API = "http://localhost:8000";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    id: "",
    date: "",
    description: "",
    amount: "",
    category: "",
  });

  const loadData = async () => {
    setLoading(true);
    const res = await fetch(`${API}/transactions`);
    const data = await res.json();
    setTransactions(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: Number(form.id),
      date: form.date,
      description: form.description,
      amount: parseFloat(form.amount),
      category: form.category,
    };

    await fetch(`${API}/transactions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setForm({ id: "", date: "", description: "", amount: "", category: "" });
    loadData();
  };

  return (
    <div className="equi-card">
      <h2 className="equi-title">Nueva Transacción</h2>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-2">
            <input className="form-control" name="id" type="number" placeholder="ID" onChange={handleChange}/>
        </div>
        <div className="col-md-3">
            <input className="form-control" name="date" type="date" onChange={handleChange}/>
        </div>
        <div className="col-md-3">
            <input className="form-control" name="description" type="text" placeholder="Descripción" onChange={handleChange}/>
        </div>
        <div className="col-md-2">
            <input className="form-control" name="amount" type="number" placeholder="Monto" onChange={handleChange}/>
        </div>
        <div className="col-md-2">
            <input className="form-control" name="category" type="text" placeholder="Categoría" onChange={handleChange}/>
        </div>
        <div className="col-12">
            <button className="equi-btn" style={{ marginTop: "14px" }}>Agregar Transacción</button>
        </div>
      </form>


      <h2 className="equi-title">Transacciones Registradas</h2>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <table className="equi-table">
        <thead>
            <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Categoría</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map(t => (
            <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.date}</td>
                <td>{t.description}</td>
                <td>{t.amount}</td>
                <td>{t.category}</td>
            </tr>
            ))}
        </tbody>
        </table>

      )}
    </div>
  );
}

export default Transactions;
