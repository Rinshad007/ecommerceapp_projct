import { useContext } from 'react';
import { Link as RouterLink,  } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  const { user,  } = useContext(AuthContext);


  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Brand / Home Link */}
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          SHOPEE
        </Typography>

        {/* Navigation Links */}
        {!user ? (
          <>
            <Button
              component={RouterLink}
              to="/login"
              color="inherit"
              sx={{ ml: 2 }}
            >
              Login
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              color="inherit"
              sx={{ ml: 2 }}
            >
              Register
            </Button>
          </>
        ) : (
          <> <Button
              component={RouterLink}
              to="/"
              color="inherit"
              sx={{ ml: 2 }}
            ><HomeIcon/></Button>

            <Button
              component={RouterLink}
              to="/cart"
              color="inherit"
              sx={{ ml: 2 }}
            >  <IconButton color="standerd" >
  
    <ShoppingCartIcon color="standerd" />
  
</IconButton></Button>
              
            {user.role === 'admin' ? (
              <Button
                component={RouterLink}
                to="/admin/dashboard"
                color="inherit"
                sx={{ ml: 2 }}
              >
                Admin
              </Button>
            ) : (
              <Button
                component={RouterLink}
                to="/user/dashboard"
                color="inherit"
                sx={{ ml: 2 }}
              >
                <PersonIcon/>
              </Button>
            )}
          
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
