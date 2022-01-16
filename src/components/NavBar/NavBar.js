import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";


const MenuAppBar = (props) => {
  const { history } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const menuItem = [
    {
      id: 1,
      menuTitle: 'REGISTER',
      pageURL: '/register'
    },
    {
      id: 2,
      menuTitle: 'LOGIN',
      pageURL: '/login'
    },
    {
      id: 3,
      menuTitle: <ShoppingCartIcon />,
      pageURL: '/cart'
    },
  ]
  return (
    <Box sx={{ flexGrow: 1 , display: 'block',overflow: 'none'}}>
      <AppBar elevation={0} sx={{backgroundColor: 'transparent'}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
            <img style={{height: '40px', width: '60px'}} src="https://freedesignfile.com/upload/2017/01/Girl-with-fashion-boutique-illustration-vector-10.jpg" alt="" />
          </Typography>
          <div>
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                  sx={{ mr: 2 , color: "black"}}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  {
                    menuItem.map(item => {
                      const { menuTitle, pageURL } = item;
                      return (
                        <MenuItem onClick={() => handleMenuClick(pageURL)} key={item.id}>{menuTitle}</MenuItem>
                      )
                    })
                  }
                </Menu>
              </>
            ) :
              (
                <div className="menuItem">
                  <ul className="nav-links">
                    <Link to="/home" className="register">
                      <li>REGISTER</li>
                    </Link>
                    <Link to="/destination/:ride" className="login">
                      <li>LOGIN</li>
                    </Link>
                    <Link to="/blog" className="cart">
                      <li><ShoppingCartIcon /></li>
                    </Link>
                  </ul>
                </div>
              )
            }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export  default MenuAppBar