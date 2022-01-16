import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Grid from "@mui/material/Grid";
import React from "react";
import { productsData } from "../../data";
import "./Products.css";

const Products = () => {
  const data = productsData;
  return (
    <Grid container spacing={4} sx={{ marginTop: "4rem" }}>
      {data.map((products) => (
        <Grid
          className="products-container"
          item
          key={products.id}
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={3}
        >
          <div className="products-wrapper">
            <img
              style={{ width: "100%", height: "100%"}}
              src={products.img}
              alt=""
            />
          </div>

          <div className="information-wrapper">
            <div className="icon">
              <SearchIcon />
            </div>
            <div className="icon">
              <ShoppingCartIcon />
            </div>
            <div className="icon">
              <FavoriteIcon />
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
