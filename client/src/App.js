import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import NavAppBar from "./components/NavAppBar";
import TransactionForm from "./components/TransactionForm";

function App() {
 
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

  return (
    <div className="App">
      <NavAppBar />
      <TransactionForm fetchTransactions={fetchTransactions} />     
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
