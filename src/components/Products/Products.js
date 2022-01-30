import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethos";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./Products.css";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await publicRequest.get(
        cat
          ? `http://localhost:5000/api/products?category=${cat}`
          : `http://localhost:5000/api/products`
      );
      setProducts(res.data);
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterProduct(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, products, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      <Grid
        container
        sx={{
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cat
          ? filterProduct.map((products) => (
              <ProductsCard
                key={products._id}
                products={products}
              ></ProductsCard>
            ))
          : products.map((products) => (
              <ProductsCard
                key={products._id}
                products={products}
              ></ProductsCard>
            ))}
      </Grid>
    </Container>
  );
};

export default Products;
