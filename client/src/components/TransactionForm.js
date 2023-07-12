import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const initialForm = {
  amount: 0,
  description: "",
  date: new Date(),
};

export default function TransactionForm({fetchTransactions}) {
  const [form, setForm] = useState(initialForm);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDate = (e) => {
    setForm({ ...form, date: e });
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

  const handleChange = () => {};

  return (
    <Card sx={{ minWidth: 275, marginTop: 10 }}>
      <CardContent>
        <Typography variant="h6">Add New Transaction</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            size="small"
            onChange={handleInput}
            value={form.amount}
            name="amount"
          />
          <TextField
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            size="small"
            onChange={handleInput}
            value={form.description}
            name="description"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Transaction Date"
              inputFormat="MM/DD/YYYY"
              onChange={handleChange}
              renderInput={(params) => (
                <TextField
                  sx={{ marginRight: 5 }}
                  size="small"
                  {...params}
                  onChange={handleDate}
                  value={form.date}
                />
              )}
            />
          </LocalizationProvider>
          <Button type="submit" variant="contained" sx={{ width: 200, marginLeft: 5 }}>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
