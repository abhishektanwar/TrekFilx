import React from "react";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import { useParams } from "react-router-dom";
import VideoCard from "../../components/VideoCard";
import ErrorPage from "../../components/ErrorPage";
import "./playlist.css";
import usePlaylistApiCalls from "../../Hooks/usePlaylistApiCalls";
import { useAuth } from "../../Contexts/AuthDialogContext";

const Playlist = () => {
  const {
    userVideoData: { playlists },
  } = usePlaylist();
  const { user } = useAuth();
  const { playlistId } = useParams();
  const { removeVideoFromPlaylist } = usePlaylistApiCalls();

  const playlist = playlists.find((playlist) => playlist._id === playlistId);

  const removeVideoFromPlaylistHandler = (playlist, video) => {
    removeVideoFromPlaylist(playlist, user.encodedToken, video);
  };
  if (playlist === undefined) {
    return <ErrorPage message="Oops! Requested playlist not found" />;
  }
  return (
    <div className="playlist-videos-main-container">
      <h2>{playlist.title}</h2>
      <div className="flex-column flex-align-item-center">
        {playlist.videos.length === 0 ? (
          <h3>This playlist is empty</h3>
        ) : (
          playlist.videos.map((video) => {
            return (
              <VideoCard
                variant="horizontal"
                video={video}
                key={video._id}
                removeVideoFromPlaylistHandler={() =>
                  removeVideoFromPlaylistHandler(playlist, video)
                }
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Playlist;
