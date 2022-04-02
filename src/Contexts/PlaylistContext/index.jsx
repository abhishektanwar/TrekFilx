import { createContext, useContext, useState } from "react";
import ModalWrapper from "../../components/ModalWrapper";
import PlaylistCreation from "../../components/PlaylistCreation";

const PlaylistContext = createContext({
  setShowPlaylistCreationModal: () => {},
});

const PlaylistProvider = ({ children }) => {
  const [showPlaylistCreationModal, setShowPlaylistCreationModal] =
    useState(false);

  return (
    <PlaylistContext.Provider value={{showPlaylistCreationModal,setShowPlaylistCreationModal}}>
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