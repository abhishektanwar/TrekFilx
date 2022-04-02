import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../Contexts/AuthDialogContext";
import { useModal } from "../../Contexts/ModalContext";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import { dispatchActioTypes } from "../../Reducers/dispatchActionTypes";
import Button from "../Buttons/Button";
import InputField from "../InputField";
import "./playlist-creation.css";

const PlaylistCreation = () => {
  const { videoToAddToPlaylist } = usePlaylist();
  const [creatingNewPlaylist, setCreatingNewPlaylist] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [updatingPlaylist, setUpdatingPlaylist] = useState(false);
  const { user } = useAuth();
  const {
    userVideoData: { playlists },
    userVideoDispatch,
  } = usePlaylist();
  const { CREATE_PLAYLIST_WITH_VIDEO } = dispatchActioTypes;

  const addPlaylistServerCall = async (props) => {
    const { playlist, video = null } = props;
    setUpdatingPlaylist(true);
    try {
      let res;
      if (video) {
        // res = await axios.post('/api/user/playlists',{...playlist},{headers:{authorization:user.encodedToken}})
      } else {
        res = await axios.post(
          "/api/user/playlists",
          { playlist },
          { headers: { authorization: user.encodedToken } }
        );
        // res = await addPlaylistService(playlist,user.encodedToken)
      }
      if (res.status === 201) {
        userVideoDispatch({ type: CREATE_PLAYLIST_WITH_VIDEO, payload: { data: res.data } });
        setPlaylistName("")
        setCreatingNewPlaylist(false)
      }
      console.log("add playlist", res);
    } catch (err) {
      console.log("err in playlist creation w/ video arg", err);
    }
  };
  return (
    <div className="playlist-creation-container flex-column">
      <h3 className="playlist-creation-container-title">Add to ...</h3>
      <ul className="playlist-contianer-body margin-top-20">
        {playlists.map((playlist) => {
          return (
            <li key={playlist.id}>
              <label className="checkbox-container">
                {playlist.title}
                <input
                  type="checkbox"
                  // checked={}
                  onChange={(e) => {}}
                />
                <span className="checkmark"></span>
              </label>
            </li>
          );
        })}

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
              onClick={() => addPlaylistServerCall({
                  playlist: {
                    title: playlistName,
                    videos: [videoToAddToPlaylist],
                  },
                })
              
                
              }
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

// { "playlist": { "title": "playasclistName","videos":[{"asdas":"asdasd"}]} }
