import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import React from "react";
import "./GetUpdates.css";

const GetUpdates = () => {
  return (
    <div className="getUpdates-container">
      <div className="updates">
        <h1>Get Updates </h1>
        <p>Get timely updates from your favourite products !</p>
        <div className="updates-input-wrapper">
          <div className="sumbit-email">
            <input type="email" placeholder="enter your email" />
            <button type="submit">
              <SendOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetUpdates;
