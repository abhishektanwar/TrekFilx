import React from 'react'
import VideoCard from '../../components/VideoCard';
import { useAuth } from '../../Contexts/AuthDialogContext';
import { usePlaylist } from '../../Contexts/PlaylistContext';
import usePlaylistApiCalls from '../../Hooks/usePlaylistApiCalls';
import { useDocumentTitle } from '../../helpers/helpers'

const LikedVideos = () => {
  const {
    userVideoData: { likedPlaylist },
  } = usePlaylist();
  const {removeVideoFromLiked} = usePlaylistApiCalls();
  const { user } = useAuth();
  useDocumentTitle("Trek Flix | Liked Videos");
  return (
    <div>
      <div className="flex-row flex-align-item-center flex-justify-content-space-between page-heading">
        <h3>Videos liked by you</h3>
      </div>
      <div>
        {likedPlaylist.length === 0 ? (
          <div className="flex-row flex-justify-content-center margin-top-20 ">
            <h3 style={{textAlign:'center'}}>You do not have any liked videos.</h3>
          </div>
        ) : (
          <div className="flex-column flex-align-item-center">
            {likedPlaylist.map((video) => {
              return <VideoCard
              variant="horizontal"
              video={video}
              key={video._id}
              removeVideoFromPlaylistHandler={() =>
                removeVideoFromLiked(user.encodedToken,video)
              }
            />;
            })}
          </div>
        )}
      </div>
    </div>
    // <VideoListingGrid />
  )
}

export default LikedVideos
