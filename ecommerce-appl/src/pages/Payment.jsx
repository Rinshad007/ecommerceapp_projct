import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setCartTotal(total);
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();

    if (cardNumber.length !== 16 || cvv.length !== 3) {
      alert("Invalid card details");
      return;
    }

    localStorage.removeItem("cart");

    alert("Payment Successful! Thank you for your purchase.");
    navigate("/success");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Payment
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Total:</strong> ₹{cartTotal}
        </Typography>
        <Box component="form" onSubmit={handlePayment} noValidate>
          <TextField
            label="Card Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            inputProps={{ maxLength: 16 }}
            required
          />
          <TextField
            label="Expiry (MM/YY)"
            variant="outlined"
            fullWidth
            margin="normal"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            inputProps={{ maxLength: 5 }}
            required
          />
          <TextField
            label="CVV"
            variant="outlined"
            fullWidth
            margin="normal"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            inputProps={{ maxLength: 3 }}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Pay ₹{cartTotal}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Payment;