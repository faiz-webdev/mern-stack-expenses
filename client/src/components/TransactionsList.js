import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton, Typography } from "@mui/material";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

export default function TransactionsList({ transactions, fetchTransactions }) {
  const remove = async (id) => {
    if (!window.confirm("Are you sure you want to remove")) return;
    console.log(id);
    const response = await fetch(`http://localhost:4000/transaction/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      fetchTransactions();
      window.alert("Deleted transaction");
    }
    const json = await response.json();
    console.log(response);
  };
  return (
    <>
      <Typography variant="h6" sx={{ marginTop: 10 }}>
        List of Transactions
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.amount}
                </TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">
                  <IconButton component="label" color="primary">
                    <EditSharpIcon>Edit</EditSharpIcon>
                  </IconButton>
                  <IconButton
                    component="label"
                    color="warning"
                    onClick={() => remove(row._id)}
                  >
                    <DeleteSharpIcon>Delete</DeleteSharpIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
