import { createContext, useContext, useReducer, useState } from "react";
import ModalWrapper from "../../components/ModalWrapper";
import PlaylistCreation from "../../components/PlaylistCreation";
import userVideoDataReducer from "../../Reducers/userVideoDataReducer";

const PlaylistContext = createContext({
  setShowPlaylistCreationModal: () => {},
});

const PlaylistProvider = ({ children }) => {
  const [showPlaylistCreationModal, setShowPlaylistCreationModal] =
    useState(false);
  const [videoToAddToPlaylist,setVideoToAddToPlaylist] = useState(null)
  const [userVideoData,userVideoDispatch] = useReducer(userVideoDataReducer,{
    playlists:[],
    likedPlaylist:[],
    watchLaterPlaylist:[],
    historyPlaylist:[]
  });
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