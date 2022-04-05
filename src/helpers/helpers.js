import { useEffect, useState } from "react";
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


const useDocumentTitle = (title) => {
  const [documentTitle, setDocumentTitle] = useState(title);
  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  return [documentTitle, setDocumentTitle];
};

export {checkVideoInPlaylist,categoryFilter,useDocumentTitle};