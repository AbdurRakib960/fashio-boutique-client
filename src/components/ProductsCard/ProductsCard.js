import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Grid from "@mui/material/Grid";
import React from "react";
import { Link } from "react-router-dom";
import "./ProductsCard.css";

const ProductsCard = ({ products }) => {
  return (
    <Grid container sx={{marginBottom: '2rem'}}
      className="products-container"
      item
      key={products._id}
      xs={12}
      sm={6}
      md={4}
      lg={4}
      xl={3}
      >
      <div className="products-wrapper">
        <img
          className="products-wrapper-img"
          src={products.img}
          alt=""
        />
      </div>

      <div className="information-wrapper">
        <div className="icon">
          <Link to={`/product/${products._id}`} state={{ products: products }}>
            <SearchIcon />
          </Link>
        </div>
        <div className="icon">
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
        </div>
        <div className="icon">
          <FavoriteIcon />
        </div>
      </div>
    </Grid>
  );
};

export default ProductsCard;
