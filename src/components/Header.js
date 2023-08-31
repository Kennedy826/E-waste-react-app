import React from "react";
import Image from "../components/images.jpg";

const Header = () => {
  return (
    <header>
 <div className="header-wraper">
    <div className="main-info">
      <h1>Web development</h1>
      <div className="main-header">
        <img src={Image} alt="main header" />
      </div>

    </div>
  </div>

    </header>
   
  )
}

export default Header
