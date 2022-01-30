import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { reset } from "../../redux/cartRedux";
import { publicRequest } from "../../requestMethos";
import "./Cart.css";

const KEY =
  "pk_test_51HZgKgCX3jxDeEgKR5ccvs5VS02BANybD1Ds1gISMlLrn1nCYqWy42ulvfSCkGnsjtcNnarI0WyAF4ew7ZZPXZPO00xI7RuDo7";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart);
  const total = cartItem.total;
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(cartItem);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const requestPayment = async () => {
      try {
        const res = await publicRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 50000,
        });
        dispatch(reset());
        navigate("/success", {
          state: { stripeData: res.data, products: cartItem },
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    stripeToken && requestPayment();
  }, [stripeToken, cartItem, cartItem.total]);

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
          Your Orders
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
              <Link to="/">
                <button className="continue-shopping-btn">
                  Continue shopping
                </button>
              </Link>
            </div>
            {cartItem &&
              cartItem?.products?.map(
                (product) =>
                  product.quantity > 0 && (
                    <Grid container className="ordered-product">
                      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <img
                          className="ordered-product-img"
                          src={product.img}
                          alt=""
                        />
                      </Grid>
                      <Grid
                        className="ordered-product-info"
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        xl={4}
                      >
                        {product.quantity > 0 && (
                          <div className="ordered-product-information">
                            <h4>{product.title}</h4>
                            <p>{product._id}</p>

                            <div className="selected-color">
                              <p
                                style={{
                                  marginRight: "8px",
                                  textTransform: "uppercase",
                                }}
                              >
                                Color:{" "}
                              </p>

                              {product.color ? (
                                <div
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "50%",
                                    backgroundColor: `${product.color}`,
                                  }}
                                ></div>
                              ) : (
                                <div
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "50%",
                                    backgroundColor: "gray",
                                  }}
                                ></div>
                              )}
                            </div>
                            <p style={{ textTransform: "uppercase" }}>
                              size: {product?.size ? product?.size?.size : "M"}{" "}
                            </p>
                          </div>
                        )}
                      </Grid>
                      {product.quantity > 0 && (
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                          <div className="ordered-quantity-wrapper">
                            <div className="discrisment">
                              <RemoveIcon />
                            </div>
                            <div className="quantity-input">
                              <input
                                type="number"
                                name=""
                                defaultValue={product.quantity}
                              />
                            </div>
                            <div className="incrisement">
                              <AddIcon />
                            </div>
                          </div>
                          <div className="ordeer-total-proc">
                            <h4>Price: $ {product.price}</h4>
                          </div>
                        </Grid>
                      )}
                    </Grid>
                  )
              )}
            {cartItem.quantity === 0 && (
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80%",
                  height: "80%",
                }}
              >
                No products in the cart..Please add an item to continue..
              </h3>
            )}
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
                    <h4>$ {cartItem.total}</h4>
                  </div>
                </div>
                {/* estimate shipping */}
                <div className="estimated-wrapper">
                  <div className="estimated">
                    <p>Estimated shippien: </p>
                  </div>
                  <div className="estimatedAmount">
                    <h4>$ {cartItem.quantity > 0 ? 12 : 0}</h4>
                  </div>
                </div>
                {/* estimate shipping  end*/}

                {/* shipping discount */}
                <div className="discount-wrapper">
                  <div className="discount">
                    <p>Shippien discount : </p>
                  </div>
                  <div className="discountAmount">
                    <h4>$ 0</h4>
                  </div>
                </div>
                {/* shipping discount end */}

                {/* final total  */}
                <div className="Total-wrapper">
                  <div className="Total">
                    <h3>Total : </h3>
                  </div>
                  <div className="TotalAmount">
                    <h3>
                      $ {cartItem.total + (cartItem.quantity > 0 ? 12 : 0)}
                    </h3>
                  </div>
                </div>
                {/* final total end */}
              </div>
              <StripeCheckout
                token={onToken}
                stripeKey={KEY}
                image="https://freedesignfile.com/upload/2017/01/Girl-with-fashion-boutique-illustration-vector-10.jpg"
                billingAddress
                shippingAddress
                amount={cartItem.total * 100}
                description={`Your total is ${total}`}
              >
                <button className="checkout-btn">checkout</button>
              </StripeCheckout>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
