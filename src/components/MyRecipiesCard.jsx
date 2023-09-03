import React from "react";

const MyRecipiesCard = ({MyRecipiesTitle, MyRecipiesTitle2 , MyRecipiesImg }) => {
  return (
    <div className="recipiesBox">
      <div className="recBox">
        <img className="img-responsive" src={MyRecipiesImg} alt="" />
        <div className="imgDesc">
          <h2>{MyRecipiesTitle}</h2>
          <p>{MyRecipiesTitle2}</p>
        </div>
      </div>
    </div>
  );
};

export default MyRecipiesCard;
