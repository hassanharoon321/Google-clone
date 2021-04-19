import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import Search from "../Components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home-header-right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home-body">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt="google"
        />
        <Search hideButtons/>
      </div>
    </div>
  );
}

export default Home;
