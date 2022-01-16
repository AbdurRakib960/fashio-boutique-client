import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import Products from '../../components/Products/Products';
import "./FilteredProducts.css";

const FilteredProducts = () => {
  return (
    <Container className="filtered-products-container">
      <h3>Category name:</h3>
      <div className="filtered-product-wrapper">
        <div className="filter-wrapper">
          <div className="filter-title">
            <h3>Filter Products :</h3>
          </div>
          <div className="filter-select">
            <Box sx={{ minWidth: 120, marginRight: "1rem" }}>
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
        {/* sort products wrapper */}
        <div className="sort-products-wrapper">
          <div className="sort-title">
            <h3>Sort Products :</h3>
          </div>
          <div className="sort-select">
            {" "}
            <Box sx={{ minWidth: 120, marginLeft: "1rem" }}>
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
      </div>
      {/* .............. selected category from home category products will show there, the products will be sort products form database that sorted by category */}
      <Products />
    </Container>
  );
};

export default FilteredProducts;
