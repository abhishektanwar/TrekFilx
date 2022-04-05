import React from "react";
import Button from "../../components/Buttons/Button";
import { ReactComponent as Add } from "../../assets/add.svg";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import PlaylistCard from "../../components/PlaylistCard";
import { useAuth } from "../../Contexts/AuthDialogContext";
import { useModal } from "../../Contexts/ModalContext";
import { useDocumentTitle } from '../../helpers/helpers'
import "./playlists.css";

const Playlists = () => {
  const {
    userVideoData: { playlists },
    setVideoToAddToPlaylist,
    setShowPlaylistCreationModal,
  } = usePlaylist();
  const { user, setAuthType } = useAuth();
  const { showModal } = useModal();
  const createPlaylistHandler = () => {
    if (user.isAuthenticated) {
      setVideoToAddToPlaylist(undefined);
      setShowPlaylistCreationModal(true);
      showModal();
    } else {
      setAuthType("login");
      showModal();
    }
  };
  useDocumentTitle("Trek Flix | Playlists")
  return (
    <div>
      <div className="flex-row flex-align-item-center flex-justify-content-space-between page-heading">
        <h3>Your Playlists</h3>
        <Button
          buttonStyle="secondary-button page-heading-action-button"
          icon={<Add />}
          buttonText="Create new playlist"
          onClick={() => createPlaylistHandler()}
        />
      </div>
      <div>
        {playlists.length === 0 ? (
          <div className="flex-row flex-justify-content-center margin-top-20">
            <h3 style={{textAlign:'center'}}>You do not have any playlist yet.</h3>
          </div>
        ) : (
          <div className="playlist-grid-container">
            {playlists.map((playlist) => {
              return <PlaylistCard playlist={playlist} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Playlists;
