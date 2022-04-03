import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthDialogContext";
import { useModal } from "../../Contexts/ModalContext";
import Button from "../Buttons/Button";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  const { setAuthType, logoutHandler, user,authType } = useAuth();
  const { showModal } = useModal();
  const handleLoginBtnClick = () => {
    showModal();
    setAuthType("login");
  };

  return (
    <>
      <Link to="/">
        <Logo />
      </Link>
      <SearchBar />
      {authType}
      <div className="nav-section">
        <Button
          buttonText={user.isAuthenticated ? "Logout" : "Login"}
          buttonStyle={"headerButton typo-sm"}
          onClick={() => (user.isAuthenticated ? logoutHandler() : handleLoginBtnClick())}
        />
      </div>
    </>
  );
};

export default Header;
