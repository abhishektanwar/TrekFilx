import React from 'react'
import Button from '../../components/Buttons/Button'
import {ReactComponent as Add} from '../../assets/add.svg'
import { usePlaylist } from '../../Contexts/PlaylistContext'
import PlaylistCard from '../../components/PlaylistCard'
import './playlists.css';
import { useAuth } from '../../Contexts/AuthDialogContext'
import { useModal } from '../../Contexts/ModalContext'
const Playlists = () => {
  const {userVideoData:{playlists},setVideoToAddToPlaylist,setShowPlaylistCreationModal} = usePlaylist()
  const { user,setAuthType } = useAuth();
  const { showModal } = useModal();
  const createPlaylistHandler = () => {
    if(user.isAuthenticated){
      setVideoToAddToPlaylist(undefined)
      setShowPlaylistCreationModal(true)
      showModal()
    }
    else{
      setAuthType('login')
      showModal()
    }
  }
  return (
    <div>
      <div className="flex-row flex-align-item-center flex-justify-content-space-between">
        <h3>Your Playlists</h3>
        <Button buttonStyle="secondary-button" icon={<Add />} buttonText="Create new playlist" onClick={()=>createPlaylistHandler()} />
      </div>
      <div>
        {playlists.length === 0 ? (
        <div className="flex-row flex-justify-content-center margin-top-20">
          <h3>You do not have any playlist yet.</h3> 
        </div>): (

          <div className="playlist-grid-container">
          {playlists.map((playlist)=>{
            // console.log("playlist",playlist)
            return <PlaylistCard playlist={playlist} />
            // return <h2>{playlist.title}</h2>
          })}
          </div>
        )}
      </div>
      
      
    </div>
  )
}

export default Playlists
