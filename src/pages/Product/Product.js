import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <Grid container className="single-product-container">
      <Grid
        item
        className="single-product-image"
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
      >
        <img
          style={{ width: "100%" }}
          src="https://img.favpng.com/15/2/20/jacket-clothing-outerwear-windbreaker-png-favpng-3R1yXLTSTYQYJ69banm93eLvm.jpg"
          alt=""
        />
      </Grid>
      <Grid
        item
        className="single-product-information"
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
      >
        <div className="sigle-product-details">
          <h1>Herman Coat</h1>
          <p className="single-product-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, aliquid! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis, aliquid!
          </p>
          <h3 className="single-product-price">$ 23</h3>
        </div>
        <div className="color-size-wrapper">
          <div className="colors">
            <h5 style={{ marginRight: "1rem" }}>Color: </h5>
            <div className="color"></div>
            <div className="color"></div>
          </div>
          <div className="size">
            <h5 style={{ marginRight: "1rem" }}>Size :</h5>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  label="Age"
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        {/* quantity and button */}
        <div className="quantity-button-wrapper">
          <div className="quantity-container">
            <div className="discrisment">
              <RemoveIcon />
            </div>
            <div className="quantity-input">
              <input type="number" name="" />
            </div>
            <div className="incrisement">
              <AddIcon />
            </div>
          </div>
        </div>
        <div className="button">
          <button className="add-cart-button">Add to cart</button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Product;
