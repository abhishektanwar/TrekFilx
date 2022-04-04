import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import ModalWrapper from "../../components/ModalWrapper";
import PlaylistCreation from "../../components/PlaylistCreation";
import { dispatchActioTypes } from "../../Reducers/dispatchActionTypes";
import userVideoDataReducer from "../../Reducers/userVideoDataReducer";
import { useAuth } from "../AuthDialogContext";

const PlaylistContext = createContext({
  setShowPlaylistCreationModal: () => {},
});

const PlaylistProvider = ({ children }) => {
  const { user } = useAuth();
  const [showPlaylistCreationModal, setShowPlaylistCreationModal] =
    useState(false);
  const [videoToAddToPlaylist,setVideoToAddToPlaylist] = useState(null)
  const [userVideoData,userVideoDispatch] = useReducer(userVideoDataReducer,{
    playlists:[],
    likedPlaylist:[],
    watchLaterPlaylist:[],
    historyPlaylist:[]
  });
  const {LOADING_DATA,LOAD_DATA,UPDATE_LIKED_VIDEO,UPDATE_HISTORY,UPDATE_WATCH_LATER,CREATE_PLAYLIST_WITH_VIDEO} = dispatchActioTypes

  useEffect(()=>{
    if(!user.isAuthenticated){
      setShowPlaylistCreationModal(false);
    }
  },[user.isAuthenticated])
  useEffect(()=>{
    if(user.isAuthenticated){
      (async () => {
        userVideoDispatch({
          type: LOADING_DATA,
          payload: { status: true },
        });
        try{
          const res = await axios.get("/api/user/history", {
            headers: { authorization: user.encodedToken },
          });
          if (res.status === 200) {
            userVideoDispatch({
              type: UPDATE_HISTORY,
              payload: { data:res.data },
            });
          }
        }
        catch(err){
          console.log("initial hitory data fetch error",err)
        }
        userVideoDispatch({
          type: LOADING_DATA,
          payload: { status: false },
        });
      })();
      
      (async () => {
        userVideoDispatch({
          type: LOADING_DATA,
          payload: { status: true },
        });
        try{
          const res = await axios.get("/api/user/likes", {
            headers: { authorization: user.encodedToken },
          });
          if (res.status === 200) {
            userVideoDispatch({
              type: UPDATE_LIKED_VIDEO,
              payload: { data:res.data },
            });
          }
        }
        catch(err){
          console.log("initial likes data fetch error",err)
        }
        userVideoDispatch({
          type: LOADING_DATA,
          payload: { status: false },
        });
      })();

      (async () => {
        userVideoDispatch({
          type: LOADING_DATA,
          payload: { status: true },
        });
        try{
          const res = await axios.get("/api/user/watchlater", {
            headers: { authorization: user.encodedToken },
          });
          if (res.status === 200) {
            userVideoDispatch({
              type: UPDATE_WATCH_LATER,
              payload: { data:res.data },
            });
          }
        }
        catch(err){
          console.log("initial likes data fetch error",err)
        }
        userVideoDispatch({
          type: LOADING_DATA,
          payload: { status: false },
        });
      })();

      (async () => {
        userVideoDispatch({
          type: LOADING_DATA,
          payload: { status: true },
        });
        try{
          const res = await axios.get("/api/user/playlists", {
            headers: { authorization: user.encodedToken },
          });
          if (res.status === 200) {
            userVideoDispatch({
              type: CREATE_PLAYLIST_WITH_VIDEO,
              payload: { data:res.data },
            });
          }
        }
        catch(err){
          console.log("initial likes data fetch error",err)
        }
        userVideoDispatch({
          type: LOADING_DATA,
          payload: { status: false },
        });
      })();
    }
  },[user.isAuthenticated])
  return (
    <PlaylistContext.Provider value={{showPlaylistCreationModal,setShowPlaylistCreationModal,videoToAddToPlaylist,setVideoToAddToPlaylist,userVideoData,userVideoDispatch}}>
      {showPlaylistCreationModal && 
      <ModalWrapper>
        <PlaylistCreation />
      </ModalWrapper>}
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export {usePlaylist, PlaylistProvider};