import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box sx={{ minHeight: "80vh" }}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
};
