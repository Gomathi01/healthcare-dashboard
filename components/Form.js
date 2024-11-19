import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
const Form = ({ setRows }) => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        file: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            file: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name: formData.name,
            age: formData.age,
            file: formData.file ? formData.file.name : null,
        };

        try {
            const response = await fetch("http://localhost:5001/submissions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            console.log("Submitted successfully:", result);
            setRows((prevRows) => [...prevRows, result]);
            setFormData({
                name: '',
                age: '',
                file: null,
            });
            alert("Form submitted successfully!");

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit the form.");
        }
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
            <h2>ABC Healthcare</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    type="number"
                    required
                />
                <Button variant="contained" component="label" fullWidth sx={{ mt: 2 }}>
                    Upload File
                    <input type="file" hidden onChange={handleFileChange} />
                </Button>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default Form;
