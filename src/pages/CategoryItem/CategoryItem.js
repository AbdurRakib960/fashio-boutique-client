import Grid from "@mui/material/Grid";
import React from "react";
import { categoryData } from "../../data";
import "./CategoryItem.css";


const CategoryItem = () => {
    const data = categoryData;
  return (
        <Grid sx={{marginTop: "6rem", marginBottom: '3rem'}} container>
                {
                  data.map(iteam => (
                    <Grid  className="category-container" item key={iteam.id} xs={12} sm={6} md={6} lg={4} xl={4}>
                        <img style={{width: '100%', height: "250px",margin: '10px'}} src={iteam.img} alt="" />
                        <div className="info-wrapper">
                          <h1>{iteam.title}</h1>
                          <button>shop now</button>
                        </div>
                    </Grid>
                  ))
                }
        </Grid>
  );
};

export default CategoryItem;
