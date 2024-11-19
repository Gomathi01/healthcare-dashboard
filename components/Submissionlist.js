import React, { useEffect, useState } from 'react';
import Form from "../components/Form";
import Table from "../components/Table";
import { Box, Grid, Paper, Typography } from "@mui/material";
const Submissionslist = () => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const response = await fetch("http://localhost:5001/submissions");
                const data = await response.json();
                setSubmissions(data);
            } catch (error) {
                console.error("Error fetching submissions:", error);
            }
        };

        fetchSubmissions();
    }, []);

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                ABC Healthcare Center
            </Typography>
            <Grid container spacing={3}>
                {/* Statistics */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Typography variant="h6">Total Entry</Typography>
                        <Typography variant="h4">{submissions.length}</Typography>
                    </Paper>
                </Grid>
                {/* Form */}
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{ padding: 3 }}>
                        <Typography variant="h5" gutterBottom>
                            Add New Entry
                        </Typography>
                        <Form setRows={setSubmissions} />
                    </Paper>
                </Grid>
                {/* Table */}
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{ padding: 3 }}>
                        <Typography variant="h5" gutterBottom>
                            Entry List
                        </Typography>
                        <Table rows={submissions} setRows={setSubmissions} />

                    </Paper>
                </Grid>
            </Grid>
        </Box>

    );
};

export default Submissionslist;
