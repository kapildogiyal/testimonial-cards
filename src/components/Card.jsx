import React from "react";
const Card = (props) => {
    let Reviews = props.Reviews;
  return (
    <div className="carddiv">
      <div className="image">
        <img src={Reviews.image} alt="loe oyu" />
        <div className="circle"></div>
      </div>
      <div className="namediv">
        <p className="namep">{Reviews.name}</p>
      </div>
      <div className="jobdiv">
        <p className="jobp">{Reviews.job}</p>
      </div>
    </div>
  );
};

export default Card;
