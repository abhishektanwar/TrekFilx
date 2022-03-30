import React from 'react'
import Button from '../../components/Buttons/Button'
import {ReactComponent as Add} from '../../assets/add.svg'

const Playlists = () => {
  return (
    <div>
      <div className="flex-row flex-align-item-center flex-justify-content-space-between">
        <h3>Your Playlists</h3>
        <Button buttonStyle="secondary-button" icon={<Add />} buttonText="Create new playlist" />
      </div>
      
    </div>
  )
}

export default Playlists
