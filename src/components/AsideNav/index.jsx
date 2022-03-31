import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ReactComponent as Explore } from "../../assets/explore.svg";
import { ReactComponent as History } from "../../assets/history.svg";
import { ReactComponent as PlaylistAddCheck } from "../../assets/playlist-add-check.svg";
import { ReactComponent as Like } from "../../assets/like.svg";
import "./aside-nav.css";
import { useAuth } from "../../Contexts/AuthDialogContext";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import { useModal } from "../../Contexts/ModalContext";
const AsideNav = () => {
  const { setAuthType, logoutHandler, user } = useAuth();
  const navigate = useNavigate();
  const { showModal } = useModal();

  const handleLogin = () => {
    showModal();
    setAuthType("login");
  };

  return (
    <div className="aside-nav-container">
        <Button
          buttonText="Explore"
          buttonStyle="aside-nav-item body-typo-md text-medium-weight secondary-button"
          icon={
            <span style={{ marginRight: "1rem" }}>
              <Explore />
            </span>
          }
          onClick={() => navigate("/explore")}
        />
        <Button
          buttonText="Liked Videos"
          buttonStyle="aside-nav-item body-typo-md text-medium-weight secondary-button"
          icon={
            <span style={{ marginRight: "1rem" }}>
              <Like />
            </span>
          }
          onClick={() => {
            user ? navigate("/liked-videos") : handleLogin();
          }}
        />
        <Button
          buttonText="Playlists"
          buttonStyle="aside-nav-item body-typo-md text-medium-weight secondary-button"
          icon={
            <span style={{ marginRight: "1rem" }}>
              <PlaylistAddCheck />
            </span>
          }
          onClick={() => {
            user ? navigate("/playlists") : handleLogin();
          }}
        />
        <Button
          buttonText="History"
          buttonStyle="aside-nav-item body-typo-md text-medium-weight secondary-button"
          icon={
            <span style={{ marginRight: "1rem" }}>
              <History />
            </span>
          }
          onClick={() => {
            user ? navigate("/history") : handleLogin();
          }}
        />
        
    </div>
  );
};

export default AsideNav;
