import { dispatchActioTypes } from "./dispatchActionTypes"

const userVideoDataReducer = (state,action) => {
  const {CREATE_PLAYLIST_WITH_VIDEO, UPDATE_PLAYLIST,UPDATE_LIKED_VIDEO} = dispatchActioTypes;
  switch(action.type){
    case CREATE_PLAYLIST_WITH_VIDEO:
      // const playlists = 
      return {
        ...state,
        playlists:[...action.payload.data.playlists]
      }
    case UPDATE_PLAYLIST:
      // find the id of updated playlist in playlist of context
      // replace that context playlist with playlist returned in response
      const updatedPlaylist = action.payload.data.playlist
      const newPlaylist = state.playlists.map((playlist)=>playlist._id === updatedPlaylist._id ? updatedPlaylist : playlist)
      return {
        ...state,
        playlists:newPlaylist
      }
    case UPDATE_LIKED_VIDEO:
      return {
        ...state,
        likedPlaylist:[...action.payload.data.likes]
      }

    default:
      return state
  }
}

export default userVideoDataReducer