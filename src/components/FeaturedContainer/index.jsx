import React from "react";
import CategoryCard from "../CategoryCard";
import "./featured-container.css";
import { useNavigate } from "react-router-dom";
import { dispatchActioTypes } from "../../Reducers/dispatchActionTypes";

const FeaturedContainer = (props) => {
  const { categories, featuredContainerTitle,dispatchFunction } = props;
  const { CATEGORY_FILTER } = dispatchActioTypes;
  const navigate = useNavigate();
  const categoryCardClickNavigationHandler = (target, payload) => {
    // dispatchFunction({ type: CATEGORY_FILTER, payload: payload });
    navigate(target);
  };
  
  return (
    <div className="margin-top-60">
      <h3 className="featured-container-header">{featuredContainerTitle}</h3>
      <div className="featured-container">
        {Object.entries(categories).map(([key,value], index) => (
          <CategoryCard
            category={{key,value}}
            key={index}
            onClick={categoryCardClickNavigationHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedContainer;
