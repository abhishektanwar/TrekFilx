import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BadgeIconButton from "../Buttons/BadgeIconButton";
import Button from "../Buttons/Button";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  
  return (
    <>
      <Link to="/">
        <Logo />
      </Link>
      <SearchBar />
      <div className="nav-section">

        <BadgeIconButton
          badgeIconButtonWrapper={"badge-icon-button-wrapper"}
          badgeNumber={2}
          icon={"far fa-heart"}
          onClick={()=> {}}
        />

        <BadgeIconButton
          badgeIconButtonWrapper={"badge-icon-button-wrapper"}
          badgeNumber={2}
          icon={"fas fa-shopping-cart badge-icon-class"}
          onClick={()=> {}}
        />

        <Button
          buttonText={"Login"}
          buttonStyle={"headerButton typo-sm"}
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default Header;
