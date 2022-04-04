const checkVideoInPlaylist = (playlist,video) =>{
  return playlist?.find((item)=>item._id === video._id)
}

export {checkVideoInPlaylist};