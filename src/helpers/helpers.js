const checkVideoInPlaylist = (playlist,video) =>{
  return playlist?.find((item)=>item._id === video._id)
}

const categoryFilter = (videos, categories) => {
  let newDataList = [];
  let categoryFilterApplied = false;
  for (let category in categories) {
    if (categories[category]["isSelected"]) {
      categoryFilterApplied = true;
      let filteredData = videos.filter(
        (video) => category === video.category
      );

      newDataList.push(...filteredData);
    }
  }
  return categoryFilterApplied ? newDataList : videos;
};

export {checkVideoInPlaylist,categoryFilter};