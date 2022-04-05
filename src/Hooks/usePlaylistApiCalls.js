import axios from "axios";
import { useState } from "react";
import { usePlaylist } from "../Contexts/PlaylistContext";
import { dispatchActioTypes } from "../Reducers/dispatchActionTypes";
import { useToast } from "../Hooks/useToast";
function usePlaylistApiCalls() {
  const { customToast } = useToast();
  const {
    CREATE_PLAYLIST_WITH_VIDEO,
    UPDATE_PLAYLIST,
    UPDATE_LIKED_VIDEO,
    UPDATE_WATCH_LATER,
    UPDATE_HISTORY,
  } = dispatchActioTypes;
  const [updatingPlaylist, setUpdatingPlaylist] = useState(false);
  const [creatingNewPlaylist, setCreatingNewPlaylist] = useState(false);

  const {
    userVideoData: { playlists },
    userVideoDispatch,
  } = usePlaylist();
  const createPlaylistWithVideo = async (props) => {
    const { playlist, authToken, setPlaylistName } = props;
    setUpdatingPlaylist(true);
    try {
      let res;
      res = await axios.post(
        "/api/user/playlists",
        { playlist },
        { headers: { authorization: authToken } }
      );
      if (res.status === 201) {
        userVideoDispatch({
          type: CREATE_PLAYLIST_WITH_VIDEO,
          payload: { data: res.data },
        });
        playlist.videos.length === 0
          ? customToast(`Empty playlist created.`, "success")
          : customToast(`Video added to playlisadst.`, "success");
        setPlaylistName("");
        setCreatingNewPlaylist(false);
      }
      console.log("add playlist", res);
    } catch (err) {
      // if (playlist.video.length)
      customToast(`Failed to add video to playlist.`, "error");
      console.log("err in playlist creation w/ video arg", err);
    }
    setUpdatingPlaylist(false);
  };

  const removeVideoFromPlaylist = async (playlist, authToken, video) => {
    setUpdatingPlaylist(true);
    try {
      let res;
      res = await axios.delete(
        `/api/user/playlists/${playlist._id}/${video._id}`,
        { headers: { authorization: authToken } }
      );
      if (res.status === 200) {
        userVideoDispatch({
          type: UPDATE_PLAYLIST,
          payload: { data: res.data },
        });
        customToast(`Video removed from playlist.`, "success");
      }
      console.log("removeVideoFromPlaylist", res);
      setUpdatingPlaylist(false);
    } catch (err) {
      customToast(`Failed to remove video from playlist.`, "error");
      console.log("err in removeVideoFromPlaylist w/ video arg", err);
    }
  };

  const addVideoToPlaylist = async (playlist, authToken, video) => {
    setUpdatingPlaylist(true);
    try {
      let res;
      res = await axios.post(
        `/api/user/playlists/${playlist._id}`,
        { video },
        { headers: { authorization: authToken } }
      );
      if (res.status === 201) {
        userVideoDispatch({
          type: UPDATE_PLAYLIST,
          payload: { data: res.data },
        });
        customToast(`Video added to playlist.`, "success");
      }
      console.log("addVideoToPlaylist", res);
      setUpdatingPlaylist(false);
    } catch (err) {
      customToast(`Failed to add video to playlist.`, "error");
      console.log("err in addVideoToPlaylist w/ video arg", err);
    }
  };

  const addVideoToLiked = async (authToken, video) => {
    setUpdatingPlaylist(true);
    try {
      let res;
      res = await axios.post(
        "/api/user/likes",
        { video },
        { headers: { authorization: authToken } }
      );
      if (res.status === 201) {
        userVideoDispatch({
          type: UPDATE_LIKED_VIDEO,
          payload: { data: res.data },
        });
        customToast(`Video added to liked videos`, "success");
      }
      console.log("addVideoToLiked", res);
      setUpdatingPlaylist(false);
    } catch (err) {
      customToast(`Failed to add video to liked videos`, "error");
      console.log("err in addVideoToLIKED", err);
    }
  };
  const removeVideoFromLiked = async (authToken, video) => {
    setUpdatingPlaylist(true);
    try {
      let res;
      res = await axios.delete(`/api/user/likes/${video._id}`, {
        headers: { authorization: authToken },
      });
      if (res.status === 200) {
        userVideoDispatch({
          type: UPDATE_LIKED_VIDEO,
          payload: { data: res.data },
        });
      }
      console.log("removed from liked videos", res);
      customToast(`Video removed from liked videos`, "success");
      setUpdatingPlaylist(false);
    } catch (err) {
      customToast(`Failed to remove video from liked videos`, "error");
      console.log("err in remove from liked videos", err);
    }
  };

  const addVideoToWatchLater = async (authToken, video) => {
    console.log("addVideoToWatchLater", authToken, video);
    setUpdatingPlaylist(true);
    try {
      let res;
      res = await axios.post(
        "/api/user/watchlater",
        { video },
        { headers: { authorization: authToken } }
      );
      if (res.status === 201) {
        userVideoDispatch({
          type: UPDATE_WATCH_LATER,
          payload: { data: res.data },
        });
        customToast(`Video added to watch later`, "success");
      }
      console.log("addVideoToWatchLater", res);
      setUpdatingPlaylist(false);
    } catch (err) {
      customToast(`Failed to add video to watch later`, "error");
      console.log("err in addVideoToWatchLater", err);
    }
  };

  const removeVideoFromWatchLater = async (authToken, video) => {
    setUpdatingPlaylist(true);
    try {
      let res;
      res = await axios.delete(`/api/user/watchlater/${video._id}`, {
        headers: { authorization: authToken },
      });
      if (res.status === 200) {
        userVideoDispatch({
          type: UPDATE_WATCH_LATER,
          payload: { data: res.data },
        });
        customToast(`Video removed from watch later`, "success");
      }
      console.log("removed from watch later videos", res);
      setUpdatingPlaylist(false);
    } catch (err) {
      customToast(`Failed to remove video from watch later`, "error");
      console.log("err in remove from watch later videos", err);
    }
  };

  const addVideoToHistory = async (authToken, video) => {
    setUpdatingPlaylist(true);
    try {
      let res;
      res = await axios.post(
        "/api/user/history",
        { video },
        { headers: { authorization: authToken } }
      );
      if (res.status === 201) {
        userVideoDispatch({
          type: UPDATE_HISTORY,
          payload: { data: res.data },
        });
      }
      console.log("addVideoToHistory", res);
      setUpdatingPlaylist(false);
    } catch (err) {
      console.log("err in addVideoToHistory", err);
    }
  };

  const removeVideoFromHistory = async (authToken, video) => {
    setUpdatingPlaylist(true);
    try {
      let res;
      res = await axios.delete(`/api/user/history/${video._id}`, {
        headers: { authorization: authToken },
      });
      if (res.status === 200) {
        userVideoDispatch({
          type: UPDATE_HISTORY,
          payload: { data: res.data },
        });
      }
      console.log("removeVideoToHistory", res);
      setUpdatingPlaylist(false);
    } catch (err) {
      console.log("err in removeVideoToHistory", err);
    }
  };

  const clearWatchHistory = async (authToken) => {
    setUpdatingPlaylist(true);
    try {
      let res;
      res = await axios.delete("/api/user/history/all", {
        headers: { authorization: authToken },
      });
      if (res.status === 200) {
        userVideoDispatch({
          type: UPDATE_HISTORY,
          payload: { data: res.data },
        });
        customToast(`History cleared`, "success");
      }
      console.log("removeVideoToHistory", res);
      setUpdatingPlaylist(false);
    } catch (err) {
      customToast(`Failed to clear history`, "error");
      console.log("err in removeVideoToHistory", err);
    }
  };

  return {
    createPlaylistWithVideo,
    updatingPlaylist,
    creatingNewPlaylist,
    removeVideoFromPlaylist,
    addVideoToPlaylist,
    addVideoToLiked,
    removeVideoFromLiked,
    addVideoToWatchLater,
    removeVideoFromWatchLater,
    addVideoToHistory,
    removeVideoFromHistory,
    clearWatchHistory,
  };
}

export default usePlaylistApiCalls;
