import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import swal from "@sweetalert/with-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux";
import { publicRequest } from "../../requestMethos";
import "./Product.css";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [navigateButton, setNavigateButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [id]);

  const handleSizeChange = (e) => {
    const value = e.target.value;
    setSize({
      [e.target.name]: value,
    });
  };

  const handleQuantity = (type) => {
    if (type === "des") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
    swal({
      title: "Product added to your cart",
      text: "For more details, Please check your cart from navBar !",
      icon: "success",
      buttons: {
        cancel: "Close",
      },
    });
    setNavigateButton(true);
  };

  // Navigate to cart
  const handleCartNavigator = () => {
    navigate("/cart")
  }
  return (
    <Container>
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
          <img style={{ width: "80%" }} src={product.img} alt="" />
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
            <h1>{product.title}</h1>
            <p className="single-product-description">{product.desc}</p>
            <h3 className="single-product-price">$ {product.price}</h3>
          </div>
          <div className="color-size-wrapper">
            <div className="colors">
              <h5 style={{ marginRight: "1rem" }}>Choose color: </h5>
              {product.color?.map((color) => {
                return (
                  <div
                    style={{ backgroundColor: `${color}` }}
                    key={color}
                    className="color"
                    onClick={() => setColor(color)}
                  ></div>
                );
              })}
            </div>
            <div className="size">
              <h5 style={{ marginRight: "1rem" }}>Size :</h5>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size?.size || ""}
                    name="size"
                    label="Size"
                    onChange={handleSizeChange}
                  >
                    <MenuItem value="xs">XS</MenuItem>
                    <MenuItem value="s">S</MenuItem>
                    <MenuItem value="m">M</MenuItem>
                    <MenuItem value="l">L</MenuItem>
                    <MenuItem value="xl">XL</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          {/* quantity and button */}
          <div className="quantity-button-wrapper">
            <div className="quantity-container">
              <div className="discrisment">
                <RemoveIcon onClick={() => handleQuantity("des")} />
              </div>
              <div className="quantity-input">
                <input type="number" name="" value={quantity} />
              </div>
              <div className="incrisement">
                <AddIcon onClick={() => handleQuantity("ins")} />
              </div>
            </div>
          </div>
          <div className="button">
            <button onClick={handleAddCart} className="add-cart-button">
              Add to cart
            </button>
            {navigateButton=== true && <button onClick={handleCartNavigator} className="add-cart-button">checkCart</button>}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
