import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "../../components/Products/Products";
import "./FilteredProducts.css";

const FilteredProducts = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
      
    });
  };

  console.log(cat, filters, sort);
  return (
    <Container className="filtered-products-container">
      <h3 style={{textTransform: 'uppercase'}}>Category : {cat}</h3>
      <div className="filtered-product-wrapper">
        <div className="filter-wrapper">
          <div className="filter-title">
            <h3>Filter:</h3>
          </div>
          <Grid container className="filter-select">
            <Box sx={{ minWidth: 120, marginRight: "1rem" }} className="color-picker">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filters.color}
                  label="Color"
                  name="color"
                  onChange={handleFilters}
                >
                  <MenuItem value="white">WHITE</MenuItem>
                  <MenuItem value="black">BLACK</MenuItem>
                  <MenuItem value="yellow">YELLOW</MenuItem>
                  <MenuItem value="red">RED</MenuItem>
                  <MenuItem value="blue">BLUE</MenuItem>
                  <MenuItem value="gray">GRAY</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ minWidth: 120 }} className="size-picker">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filters.size}
                  label="Size"
                  name="size"
                  onChange={handleFilters}
                >
                  <MenuItem value="xs">XS</MenuItem>
                  <MenuItem value="s">S</MenuItem>
                  <MenuItem value="m">M</MenuItem>
                  <MenuItem value="l">L</MenuItem>
                  <MenuItem value="xl">XL</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </div>
        {/* sort products wrapper */}
        <div className="sort-products-wrapper">
          <div className="sort-title">
            <h3>Sort :</h3>
          </div>
          <div  className="sort-select">
            {" "}
            <Box sx={{ minWidth: 120, marginLeft: "1rem" }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Sort"
                  onChange={(e) => setSort(e.target.value)}
                >
                  <MenuItem value="newest">Newest</MenuItem>
                  <MenuItem value="asc">Price (asc)</MenuItem>
                  <MenuItem value="desc">Price (desc)</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>

      <Products cat={cat} filters={filters} sort={sort} />
    </Container>
  );
};

export default FilteredProducts;
