import React, { useState } from "react";
import Card from "./Card";
import { FaQuoteLeft, FaQuoteRight, FaGem } from "react-icons/fa";
// import {FiChevronLeft,FiChevronright} from 'react-icons/fi';

const Testimonial = (props) => {
  let Reviews = props.Reviews;
  const [index,SetIndex]=useState(0);
  function leftshifthandler(){
    if(index-1<0){
        SetIndex(Reviews.length-1);
    } 
    else{
        SetIndex(index-1);
    }
  }
  function rightshifthandler(){
    if(index+1 >=Reviews.length){
        SetIndex(0);
    }
    else{
        SetIndex(index+1);
    }
  }
  function surprisehandler(){
    let random = Math.floor(Math.random() * Reviews.length);
    SetIndex(random); 
  }
  return (
    <div className="cardcomponent">
      <Card Reviews={Reviews[index]}></Card>
      <div className="ld">
        <FaQuoteLeft className="left"></FaQuoteLeft>
      </div>
      <div className="desc">{Reviews[index].text}</div>
      <div className="rd">
        <FaQuoteRight className="right"></FaQuoteRight>
      </div>
      <div className="buttons">
        <button className="cl" onClick={leftshifthandler}>Previous</button>
        <button className="cr" onClick={rightshifthandler}>Next</button>
      </div>
      <div className="smd">
        <button className="s" onClick={surprisehandler}>Surprise Me</button>
      </div>
    </div>
  );
};

export default Testimonial;
