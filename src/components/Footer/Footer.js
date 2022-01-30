import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <Container className="footer-Container">
      <Grid container spacing={4} >
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <div className="left-side">
            <div className="left-title">
              <h1>FASHION BOUTIQUE</h1>
            </div>
            <div className="left-description">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="social-icon">
              <FacebookOutlinedIcon style={{marginRight:'1rem', fontSize: '30px', cursor: "pointer"}} />
              <FacebookOutlinedIcon style={{marginRight:'1rem', fontSize: '30px', cursor: "pointer"}} />
              <FacebookOutlinedIcon style={{marginRight:'1rem', fontSize: '30px', cursor: "pointer"}} />
            </div>
          </div>
        </Grid>
        {/* middle side */}
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <div className="middle-title">
            <h1>Useful Links</h1>
          </div>
          <div className="middle-side">
            <div className="middle-left">
              <ul>
                <li>Home</li>
                <li>Man Fashion</li>
                <li>Accessories</li>
                <li>Order Tracking</li>
                <li>Wishlist</li>
              </ul>
            </div>
            <div className="middle-right">
              <ul>
                <li>Cart</li>
                <li>Women Fashion</li>
                <li>My account</li>
                <li>Whishlist</li>
                <li>Teal</li>
              </ul>
            </div>
          </div>
        </Grid>
        {/* right side */}
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <div className="right-side">
            <div className="right-title">
              <h1>Contacts</h1>
            </div>
            <div className="contact-list">
              <ul>
                <li> <LocationOnIcon style={{marginRight: '1rem', fontSize: '16px'}}/> Biswanath, Sylhet, Bangladesh</li>
                <li><CallIcon style={{marginRight: '1rem', fontSize: '16px'}} /> +8801758259614</li>
                <li><EmailOutlinedIcon style={{marginRight: '1rem', fontSize: '16px'}}/> dev.abdurRakib@gmail.com</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
