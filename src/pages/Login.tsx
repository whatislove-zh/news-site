import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Login = () => {
  return (
    <Box
      sx={{ display: "flex",flexDirection:"column", justifyContent: "center", alignItems: "center", minHeight:"80vh" }}
    >
      <Typography variant="h5">Enter your username/email and password please</Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
          margin:"25px"
        }}
      >
        <TextField
          fullWidth
          autoComplete="email"
          sx={{ m: "15px" }}
          placeholder="Login"
        />
        <TextField
          fullWidth
          autoComplete="password"
          type="password"
          sx={{ m: "15px" }}
          placeholder="Password"
        />
        <Button type="submit" variant="outlined" sx={{ width: "30%" }}>
          Sign In
        </Button>
      </Box>
    </Box>
  );
};
