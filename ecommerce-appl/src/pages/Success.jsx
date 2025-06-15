import { Container, Typography,  Paper,Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link as RouterLink,  } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';


const Success = () => {
  const {clearCart}=
  useContext(CartContext);
  useEffect(() => {
    clearCart();
  },[]);
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8, textAlign: 'center' }}>
        <CheckCircleIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
        <Typography variant="h4" gutterBottom>
          Payment Successful 🎉
        </Typography>
        <Typography variant="body1">
          Thank you for your purchase!
        </Typography>
         <Button
              component={RouterLink}
              to="/home"
              color="inherit"
              sx={{ ml: 2 }}
            >
              HOME
            </Button>
      </Paper>
    </Container>
  );
};

export default Success;
