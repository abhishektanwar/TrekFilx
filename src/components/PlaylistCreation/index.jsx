import React, { useState } from "react";
import Button from "../Buttons/Button";
import InputField from "../InputField";
import "./playlist-creation.css";

const PlaylistCreation = () => {
  const [creatingNewPlaylist, setCreatingNewPlaylist] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  return (
    <div className="playlist-creation-container flex-column">
      <h3 className="playlist-creation-container-title">Add to ...</h3>
      <ul className="playlist-contianer-body margin-top-20">
        <li>
          <label className="checkbox-container">
            Playlist 1
            <input
              type="checkbox"
              // checked={}
              onChange={(e) => {}}
            />
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="checkbox-container">
            Playlist 2
            <input
              type="checkbox"
              // checked={}
              onChange={(e) => {}}
            />
            <span className="checkmark"></span>
          </label>
        </li>
      </ul>
      <div className="playlist-creation-section margin-top-20">
        {creatingNewPlaylist ? (
          <InputField
            type="text"
            name="playlistName"
            labelClass="required-field"
            id="playlistName"
            placeholder="Enter new playlist name"
            labelText="Playlist Title"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            required={true}
            validation={playlistName === 0 ? false : true}
            parentClass="margin-top-20"
          />
        ) : null}
        <div className="flex-row margin-top-20 flex-justify-content-center">
          {creatingNewPlaylist ? (
            <Button
              buttonText="Create"
              buttonStyle={`${
                playlistName.length === 0 ? "btn-disabled" : ""
              } margin-top-0`}
              onClick={() => {}}
            />
          ) : null}
          <Button
            buttonText={creatingNewPlaylist ? "Cancel" : "Create new playlist"}
            buttonStyle="btn-outline-primary margin-top-0"
            onClick={() => {
              creatingNewPlaylist
                ? setCreatingNewPlaylist(false)
                : setCreatingNewPlaylist(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaylistCreation;
