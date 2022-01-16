import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <NavBar />
      <Announcement />
      <Container className="cart-container">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            marginTop: "3rem",
          }}
        >
          Your Coat
        </h1>
        <Grid container spacing={2} className="cart-content">
          <Grid
            className="ordered-products-wrapper"
            item
            xs={12}
            sm={12}
            md={8}
            lg={6}
            xl={6}
          >
            <div className="continue-shopping-btn-wrapper">
              <button className="continue-shopping-btn">
                Continue shopping
              </button>
            </div>
            <Grid container className="ordered-product">
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <img
                  className="ordered-product-img"
                  src="https://img.favpng.com/15/2/20/jacket-clothing-outerwear-windbreaker-png-favpng-3R1yXLTSTYQYJ69banm93eLvm.jpg"
                  alt=""
                />
              </Grid>
                <Grid className="ordered-product-info" item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <div className="ordered-product-information">
                    <h5>product name...</h5>
                    <p>Product id: 123434</p>
                    <p>color: </p>
                    <p>size:</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <div className="ordered-quantity-wrapper">
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
                  <div className="ordeer-total-proc">
                    <h4>Price: $ 23</h4>
                  </div>
                </Grid>
            </Grid>
            
          </Grid>

          {/* start cart total part from here */}
          <Grid
            className="cart-total-content"
            item
            xs={12}
            sm={12}
            md={4}
            lg={6}
            xl={6}
          >
            <div className="checkout-top-wrapper">
              <button className="checkout-top-btn">checkout</button>
            </div>
            <div className="total-count-container">
              <h1 style={{ fontWeight: 400, marginBottom: "1rem" }}>
                Order Summary
              </h1>
              <div className="total-calculate-wrappe">
                <div className="subtotal-wrapper">
                  <div className="subtotal">
                    <p>Subtotal: </p>
                  </div>
                  <div className="subtotalAmount">
                    <h4>$ 12</h4>
                  </div>
                </div>
                {/* estimate shipping */}
                <div className="estimated-wrapper">
                  <div className="estimated">
                    <p>Estimated shippien: </p>
                  </div>
                  <div className="estimatedAmount">
                    <h4>$ 12</h4>
                  </div>
                </div>
                {/* estimate shipping  end*/}

                {/* shipping discount */}
                <div className="discount-wrapper">
                  <div className="discount">
                    <p>Shippien discount : </p>
                  </div>
                  <div className="discountAmount">
                    <h4>$ 12</h4>
                  </div>
                </div>
                {/* shipping discount end */}

                {/* final total  */}
                <div className="Total-wrapper">
                  <div className="Total">
                    <h3>Total : </h3>
                  </div>
                  <div className="TotalAmount">
                    <h3>$ 12</h3>
                  </div>
                </div>
                {/* final total end */}
                <button className="checkout-btn">checkout</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
