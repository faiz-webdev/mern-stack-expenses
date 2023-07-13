import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import TransactionForm from "../components/TransactionForm";
import TransactionsList from "../components/TransactionsList";
import Cookies from "js-cookie";

function Home() {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});

  useEffect(() => {
    fetchTransctions();
  }, []);

  async function fetchTransctions() {
    const token = Cookies.get('token');

    const res = await fetch("http://localhost:4000/transaction", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const { data } = await res.json();
    setTransactions(data);
  }

  return (
    <div>
      <Container>
        <TransactionForm
          fetchTransctions={fetchTransctions}
          editTransaction={editTransaction}
        />

        <TransactionsList
          transactions={transactions}
          fetchTransctions={fetchTransctions}
          setEditTransaction={setEditTransaction}
        />
      </Container>
    </div>
  );
}

export default Home;
