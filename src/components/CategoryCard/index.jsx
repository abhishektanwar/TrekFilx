import React from "react";
import { useVideoListing } from "../../Contexts/VideoListingContext";
import { dispatchActioTypes } from "../../Reducers/dispatchActionTypes";
import utils from "../../utils";
import "./category-card.css";
const CategoryCard = (props) => {
  const { category, onClick } = props;
  // const [key,value] = category;
  const {videoListingDispatch} = useVideoListing()
  const {CATEGORY_FILTER} = dispatchActioTypes
  // videoListingDispatch({
  //   type: CATEGORY_FILTER,
  //   payload: {
  //     category: {
  //       key: key,
  //       value: { ...value, ["isSelected"]: !value.isSelected },
  //     },
  //   },
  // })
  return (
    <div
      class="margin-trb-16 category-card cursor-pointer"
      onClick={() => {
        videoListingDispatch({
          type: CATEGORY_FILTER,
          payload: {
            category: {
              key: category.key,
              value: { ...category.value, ["isSelected"]: !category.value.isSelected },
            },
          },
        })
        onClick("/explore", category.category)
      }
      }
    >
      <img
        src={utils.getImg(`${category.key}.webp`)}
        alt="avatar"
        loading="lazy"
        class="responsive-img"
      />
      {console.log("ss",category.key)}
      <p className="typo-sm category-title">{category.value.title}</p>
    </div>
  );
};

export default CategoryCard;
