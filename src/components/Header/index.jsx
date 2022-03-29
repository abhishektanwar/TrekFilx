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
