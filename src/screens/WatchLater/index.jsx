import React from "react";
import VideoCard from "../../components/VideoCard";
import { useAuth } from "../../Contexts/AuthDialogContext";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import usePlaylistApiCalls from "../../Hooks/usePlaylistApiCalls";

const WatchLater = () => {
  const {
    userVideoData: { watchLaterPlaylist },
  } = usePlaylist();
  const { removeVideoFromWatchLater } = usePlaylistApiCalls();
  const { user } = useAuth();
  return (
    <div>
      <div className="flex-row flex-align-item-center flex-justify-content-space-between page-heading">
        <h3>Watch Later Videos</h3>
      </div>
      <div>
        {watchLaterPlaylist.length === 0 ? (
          <div className="flex-row flex-justify-content-center margin-top-20">
            <h3 style={{textAlign:'center'}}>You do not have any videos to watch later.</h3>
          </div>
        ) : (
          <div className="flex-column flex-align-item-center">
            {watchLaterPlaylist.map((video) => {
              return (
                <VideoCard
                  variant="horizontal"
                  video={video}
                  key={video._id}
                  removeVideoFromPlaylistHandler={() =>
                    removeVideoFromWatchLater(user.encodedToken, video)
                  }
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchLater;
