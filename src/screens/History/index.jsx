import React from "react";
import Button from "../../components/Buttons/Button";
import VideoCard from "../../components/VideoCard";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import usePlaylistApiCalls from "../../Hooks/usePlaylistApiCalls";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import { useAuth } from "../../Contexts/AuthDialogContext";
const History = () => {
  const {
    userVideoData: { historyPlaylist },
  } = usePlaylist();
  const { removeVideoFromHistory,clearWatchHistory } = usePlaylistApiCalls();
  const { user } = useAuth();
  return (
    <div>
      <div className="flex-row flex-align-item-center flex-justify-content-space-between page-heading">
        <h3>Watch History</h3>
        <Button
          buttonStyle="secondary-button page-heading-action-button"
          icon={<DeleteIcon />}
          buttonText="Clear All History"
          onClick={()=>clearWatchHistory(user.encodedToken)}
        />
      </div>
      <div>
        {historyPlaylist.length === 0 ? (
          <div className="flex-row flex-justify-content-center margin-top-20">
            <h3 style={{textAlign:'center'}}>You do not have any watch history.</h3>
          </div>
        ) : (
          <div className="flex-column flex-align-item-center">
            {historyPlaylist.map((video) => {
              return <VideoCard
              variant="horizontal"
              video={video}
              key={video._id}
              removeVideoFromPlaylistHandler={() =>
                removeVideoFromHistory(user.encodedToken,video)
              }
            />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
