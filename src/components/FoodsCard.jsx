import React from "react";

const FoodsCard = ({FoodName , FoodProce , FoodImg , FoodText}) => {
  return (
    <div className="foodsControl">
      <div className="foodBox">
        <div className="foodContainerBox">
          <img className="img-responsive" src={FoodImg} alt="" />
          <div className="imgDesc">
            <h2>{FoodName}</h2>
            <p>{FoodProce}</p>
            <button>{FoodText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodsCard;
