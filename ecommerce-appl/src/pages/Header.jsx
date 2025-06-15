import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Stack } from "@mui/material";
import ProductSlider from "../components/ProductSlider";
// In App.js or Home.jsx
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Header() {
  
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,
        px: 2,
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to Shopee
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Shop the latest products!
      </Typography>

      <Box
        component="img"
        src="/Shopee_logo.svg.webp"
        alt="shoppy logo"
        height={100}
        width={90}
        sx={{ my: 2 }}
      />

      <Stack justifyContent="center" direction="row" spacing={2}>
        <Button
          component={Link}
          to="/home"
          variant="contained"
          color="primary"
        >
          Shop Now
        </Button>
      </Stack>
      
<h2>FEATURED PRODUCTS</h2>
<ProductSlider/>
    </Box>
  );

}

export default Header;