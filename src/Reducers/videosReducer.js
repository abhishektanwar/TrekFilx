import { dispatchActioTypes } from "./dispatchActionTypes"

export const videosReducer = (state,action) =>{
  const {LOADING_DATA,LOAD_DATA,SET_ERROR} = dispatchActioTypes;
  switch(action.type){
    case LOADING_DATA:
      return {
        ...state,
        isDataLoading:action.payload.status
      };
    case LOAD_DATA:{
      if(action.payload.videos){
        return {
          ...state,
          videos:[...action.payload.videos],
          isDataLoading:action.payload.status
        }
      }
      if(action.payload.categories){
        return {
          ...state,
          categoriesData:[...action.payload.categories],
          categories:action.payload.categoriesFilterData
        }
      }
    }
    
    default:
      return state;
  }
} 