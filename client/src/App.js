import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import NavAppBar from "./components/NavAppBar";
import TransactionForm from "./components/TransactionForm";
import TransactionsList from "./components/TransactionsList";
import { Container } from "@mui/material";

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
      <Container>
        <TransactionForm fetchTransactions={fetchTransactions} />
        <TransactionsList transactions={transactions} fetchTransactions={fetchTransactions} />
      </Container>
    </div>
  );
}

export default App;
