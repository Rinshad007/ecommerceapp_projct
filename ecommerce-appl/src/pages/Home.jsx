import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import {
  Button,
  Typography,
  TextField,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  CardActions
} from '@mui/material';
import api from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
   const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await api.get('/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Products
      </Typography>

      <TextField
        fullWidth
        label="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        variant="outlined"
        sx={{ mb: 3 }}
      />

      {filtered.length === 0 ? (
        <Typography>No products found.</Typography>
      ) : (
        <Grid container spacing={3}>
          {filtered.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <img
                  src={product.imageUrl}
                  alt={product.description}
                  style={{width:"100%",height:"180px",objectFit:"cover",borderRadius:"8px"}}/>

                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    ₹{product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                    <Typography  variant="body2" color="text.secondary">
                    {product.size}
                  </Typography>
                </CardContent>
                <CardActions>
                        <Stack direction="row" spacing={1} sx={{ width: '100%', justifyContent: 'space-between' }}>
                          <Button size="small" variant="contained" onClick={() => addToCart(product)}>
                            Add to Cart
                          </Button>
                          <Button
                            size="small"
                            component={Link}
                            to={`/product/${product._id}`}
                            variant="outlined"
                          >
                            View Details
                          </Button>
                        </Stack>
                      </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
