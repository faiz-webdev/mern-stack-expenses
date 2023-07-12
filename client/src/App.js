import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import NavAppBar from "./components/NavAppBar";
import TransactionForm from "./components/TransactionForm";

const initialForm = {
  amount: 0,
  description: "",
  date: "",
};

function App() {
  const [form, setForm] = useState(initialForm);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    const res = await fetch("http://localhost:4000/transaction");
    const { data } = await res.json();
    console.log(data);
    setTransactions(data);
  }

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit");

    const response = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (response.ok) {
      fetchTransactions();
      setForm(initialForm);
    }
  };

  return (
    <div className="App">
      <NavAppBar />
      <TransactionForm />     
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="enter transaction amount"
          onChange={handleInput}
          value={form.amount}
          name="amount"
        />
        <input
          type="text"
          placeholder="enter transaction detail"
          onChange={handleInput}
          value={form.description}
          name="description"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <section>
        <table>
          <thead>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
          </thead>
          <tbody>
            {transactions.map((tr) => (
              <tr>
                <td>{tr.amount}</td>
                <td>{tr.description}</td>
                <td>{tr.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
