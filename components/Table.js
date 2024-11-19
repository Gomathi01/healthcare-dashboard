import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const DataTable = ({ rows, setRows }) => {
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5001/submissions/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                const updatedRows = rows.filter((row) => row.id !== id);
                setRows(updatedRows);
                alert('Record deleted successfully');
            } else {
                alert('Error deleting record');
            }
        } catch (error) {
            console.error("Error deleting record:", error);
            alert('Error deleting record');
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead style={{ backgroundColor: "lightgray" }}>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>File</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.age}</TableCell>
                            <TableCell>{row.file || 'No File'}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleDelete(row.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
