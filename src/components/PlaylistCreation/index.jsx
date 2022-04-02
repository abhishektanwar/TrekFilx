import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../Contexts/AuthDialogContext";
import { useModal } from "../../Contexts/ModalContext";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import usePlaylistApiCalls from "../../Hooks/usePlaylistApiCalls";
import { dispatchActioTypes } from "../../Reducers/dispatchActionTypes";
import Button from "../Buttons/Button";
import InputField from "../InputField";
import "./playlist-creation.css";

const PlaylistCreation = () => {
  const { videoToAddToPlaylist } = usePlaylist();
  const [creatingNewPlaylist, setCreatingNewPlaylist] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  // const [updatingPlaylist, setUpdatingPlaylist] = useState(false);
  const { user } = useAuth();
  const {
    userVideoData: { playlists },
    userVideoDispatch,
  } = usePlaylist();
  const { CREATE_PLAYLIST_WITH_VIDEO,UPDATE_PLAYLIST } = dispatchActioTypes;
  const {createPlaylistWithVideo,removeVideoFromPlaylist,addVideoToPlaylist,updatingPlaylist} = usePlaylistApiCalls()
  // const createPlaylistWithVideo = async (props) => {
  //   const { playlist, video = null } = props;
  //   setUpdatingPlaylist(true);
  //   try {
  //     let res;
  //     if (video) {
  //       // res = await axios.post('/api/user/playlists',{...playlist},{headers:{authorization:user.encodedToken}})
  //     } else {
  //       res = await axios.post(
  //         "/api/user/playlists",
  //         { playlist },
  //         { headers: { authorization: user.encodedToken } }
  //       );
  //       // res = await addPlaylistService(playlist,user.encodedToken)
  //     }
  //     if (res.status === 201) {
  //       userVideoDispatch({ type: CREATE_PLAYLIST_WITH_VIDEO, payload: { data: res.data } });
  //       setPlaylistName("")
  //       setCreatingNewPlaylist(false)
  //     }
  //     console.log("add playlist", res);
  //   } catch (err) {
  //     console.log("err in playlist creation w/ video arg", err);
  //   }
  // };

  // const removeVideoFromPlaylist = async(playlist,video) => {
  //   setUpdatingPlaylist(true);
  //   try {
  //     let res;
  //     res = await axios.delete(
  //       `/api/user/playlists/${playlist._id}/${video._id}`,
  //       { headers: { authorization: user.encodedToken } }
  //     );
  //     if (res.status === 200) {
  //       userVideoDispatch({ type: UPDATE_PLAYLIST, payload: { data: res.data } });
  //     }
  //     console.log("removeVideoFromPlaylist", res);
  //   } catch (err) {
  //     console.log("err in removeVideoFromPlaylist w/ video arg", err);
  //   }
  // }

  // const addVideoToPlaylist = async(playlist,video) => {
  //   setUpdatingPlaylist(true);
  //   try {
  //     let res;
  //     res = await axios.post(
  //       `/api/user/playlists/${playlist._id}`,
  //       { video },
  //       { headers: { authorization: user.encodedToken } }
  //     );
  //     if (res.status === 201) {
  //       userVideoDispatch({ type: UPDATE_PLAYLIST, payload: { data: res.data } });
  //     }
  //     console.log("addVideoToPlaylist", res);
  //   } catch (err) {
  //     console.log("err in addVideoToPlaylist w/ video arg", err);
  //   }
  // } 
  const doesVideoExistInPlaylist = (video,playlist) => {
    return playlist.find((item)=>item._id === video._id)
  }
  return (
    <div className="playlist-creation-container flex-column">
      <h3 className="playlist-creation-container-title">Add to ...</h3>
      <ul className="playlist-contianer-body margin-top-20">
        {playlists.map((playlist) => {
          const exists = doesVideoExistInPlaylist(videoToAddToPlaylist,playlist.videos)
          return (
            <li key={playlist._id}>
              <label className="checkbox-container">
                {playlist.title} 
                <input
                  type="checkbox"
                  checked={exists?._id === videoToAddToPlaylist._id}
                  onChange={(e) => {exists ? removeVideoFromPlaylist(playlist,user.encodedToken,videoToAddToPlaylist) : addVideoToPlaylist(playlist,user.encodedToken,videoToAddToPlaylist)}}
                />
                <span className="checkmark"></span>
              </label>
            </li>
          );
        })}

      </ul>
      {updatingPlaylist ? <h3>Updating playlists</h3> : null}
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
              onClick={() => createPlaylistWithVideo({
                  playlist: {
                    title: playlistName,
                    videos: [videoToAddToPlaylist],
                  },
                  authToken:user.encodedToken,
                  setPlaylistName:setPlaylistName
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
