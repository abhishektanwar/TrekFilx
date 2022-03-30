import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthDialogContext";
import { useModal } from "../../Contexts/ModalContext";
import BadgeIconButton from "../Buttons/BadgeIconButton";
import Button from "../Buttons/Button";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  const { setAuthType, logoutHandler, user } = useAuth();
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
      <div className="nav-section">
        <Button
          buttonText={user ? "Logout" : "Login"}
          buttonStyle={"headerButton typo-sm"}
          onClick={() => (user ? logoutHandler() : handleLoginBtnClick())}
        />
      </div>
    </>
  );
};

export default Header;
