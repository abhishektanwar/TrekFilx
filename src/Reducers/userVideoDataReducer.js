import { dispatchActioTypes } from "./dispatchActionTypes"

const userVideoDataReducer = (state,action) => {
  const {CREATE_PLAYLIST_WITH_VIDEO} = dispatchActioTypes;
  switch(action.type){
    case CREATE_PLAYLIST_WITH_VIDEO:
      // const playlists = 
      return {
        ...state,
        playlists:[...action.payload.data.playlists]
      }
    
    default:
      return state
  }
}

export default userVideoDataReducer