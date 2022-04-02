import axios from "axios";
import { useState } from "react";
import { usePlaylist } from "../Contexts/PlaylistContext";
import { dispatchActioTypes } from "../Reducers/dispatchActionTypes";

function usePlaylistApiCalls() {
  const {CREATE_PLAYLIST_WITH_VIDEO,UPDATE_PLAYLIST} = dispatchActioTypes
  const [updatingPlaylist,setUpdatingPlaylist] = useState(false)
  const [creatingNewPlaylist, setCreatingNewPlaylist] = useState(false);

  const {
    userVideoData: { playlists },
    userVideoDispatch,
  } = usePlaylist();
  const createPlaylistWithVideo = async (props) => {
    const { playlist, authToken,setPlaylistName } = props;
    setUpdatingPlaylist(true);
    try {
      let res;
        res = await axios.post(
          "/api/user/playlists",
          { playlist },
          { headers: { authorization: authToken } }
        );
      if (res.status === 201) {
        userVideoDispatch({ type: CREATE_PLAYLIST_WITH_VIDEO, payload: { data: res.data } });
        setPlaylistName("")
        setCreatingNewPlaylist(false)
      }
      console.log("add playlist", res);
      setUpdatingPlaylist(false);

    } catch (err) {
      console.log("err in playlist creation w/ video arg", err);
    }
  };

  const removeVideoFromPlaylist = async(playlist,authToken,video) => {
    setUpdatingPlaylist(true);
    try {
      let res;
      res = await axios.delete(
        `/api/user/playlists/${playlist._id}/${video._id}`,
        { headers: { authorization: authToken } }
      );
      if (res.status === 200) {
        userVideoDispatch({ type: UPDATE_PLAYLIST, payload: { data: res.data } });
      }
      console.log("removeVideoFromPlaylist", res);
      setUpdatingPlaylist(false);

    } catch (err) {
      console.log("err in removeVideoFromPlaylist w/ video arg", err);
    }
  }

  const addVideoToPlaylist = async(playlist,authToken,video) => {
    setUpdatingPlaylist(true);
    try {
      let res;
      res = await axios.post(
        `/api/user/playlists/${playlist._id}`,
        { video },
        { headers: { authorization: authToken } }
      );
      if (res.status === 201) {
        userVideoDispatch({ type: UPDATE_PLAYLIST, payload: { data: res.data } });
      }
      console.log("addVideoToPlaylist", res);
    setUpdatingPlaylist(false);

    } catch (err) {
      console.log("err in addVideoToPlaylist w/ video arg", err);
    }
  } 

  return {createPlaylistWithVideo,updatingPlaylist,creatingNewPlaylist,removeVideoFromPlaylist,addVideoToPlaylist}
}

export default usePlaylistApiCalls;