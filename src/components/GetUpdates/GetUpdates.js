import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import React from "react";
import "./GetUpdates.css";

const GetUpdates = () => {
  return (
    <div className="getUpdates-container">
      <div className="updates">
        <h2>Get Updates </h2>
        <p>Get timely updates from your favourite products !</p>
        <div className="updates-input-wrapper">
          <div className="sumbit-email">
            <input type="email" placeholder="enter your email" />
            <button type="submit">
              <SendOutlinedIcon style={{cursor: 'pointer', backgroundColor: 'white'}} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetUpdates;
