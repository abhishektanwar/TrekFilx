import { dispatchActioTypes } from "./dispatchActionTypes"

export const videosReducer = (state,action) =>{
  const {LOADING_DATA,LOAD_DATA,SET_ERROR,CATEGORY_FILTER,ALL_CATEGORY} = dispatchActioTypes;
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
          categories:action.payload.categoriesFilterData,
          isDataLoading:action.payload.status
        }
      }
    }

    case CATEGORY_FILTER:{
      return {
        ...state,
        categories:{
          ...state["categories"],[action.payload.category.key]:action.payload.category.value
        }
      }
    }

    case ALL_CATEGORY:
      return {
        ...state,
        categories:action.payload.filter,
        allCategorySelected:action.payload.allCategorySelected

      }
    
    default:
      return state;
  }
} 