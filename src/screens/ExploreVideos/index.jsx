import React from "react";
import VideoListingGrid from "../../components/VideoListingGrid";
import { useVideoListing } from "../../Contexts/VideoListingContext";
import { dispatchActioTypes } from "../../Reducers/dispatchActionTypes";
import {categoryFilter} from '../../helpers/helpers'
import { useDocumentTitle } from '../../helpers/helpers'
import "./explore-videos.css";
const ExploreVideos = () => {
  const {
    videoListingState: {
      videos,
      categoriesData,
      categories,
      isDataLoading,
      allCategorySelected,
    },
    videoListingDispatch,
  } = useVideoListing();
  const { CATEGORY_FILTER, ALL_CATEGORY } = dispatchActioTypes;
  
  const categoryFilteredVideoData = categoryFilter(videos, categories);

  const resetCategoryFilter = () => {
    let newCategoryFilter = {};
    Object.entries(categories).map(([key, value]) => {
      newCategoryFilter = {
        ...newCategoryFilter,
        [key]: { ...value, ["isSelected"]: allCategorySelected ? false : true },
      };
    });
    videoListingDispatch({
      type: ALL_CATEGORY,
      payload: {
        filter: newCategoryFilter,
        allCategorySelected: !allCategorySelected,
      },
    });
  };
  useDocumentTitle("Trek Flix | Explore")
  return (
    <div className="flex-column">
      <div className="chip-container">
        <span
          className={`chip typo-xs cursor-pointer ${allCategorySelected ? "active-chip" : ""}`}
          onClick={() => resetCategoryFilter()}
        >
          All
        </span>
        {Object.entries(categories).map(([key, value], id) => (
          <span
            className={`chip typo-xs cursor-pointer  ${
              value["isSelected"] ? "active-chip" : ""
            }`}
            onClick={() =>
              videoListingDispatch({
                type: CATEGORY_FILTER,
                payload: {
                  category: {
                    key: key,
                    value: { ...value, ["isSelected"]: !value.isSelected },
                  },
                },
              })
            }
            key={id}
          >
            {value.title}
          </span>
        ))}
      </div>
      <VideoListingGrid videos={categoryFilteredVideoData} />
    </div>
  );
};

export default ExploreVideos;
