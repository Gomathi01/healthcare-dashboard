import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <AppBar
            position="static"
            sx={{
                background: '#7a716e',


                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 20px",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "'Roboto', sans-serif",
                        letterSpacing: "1px",
                        color: 'white',
                        cursor: "pointer",
                    }}
                    onClick={() => navigate("/")}
                >
                    ABC Healthcare
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
