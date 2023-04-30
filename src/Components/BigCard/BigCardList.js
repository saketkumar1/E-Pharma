import React from "react";
import BigCard from "./BigCard";

export default function BigCardList(props) {
  return props.cardData.map((cardData) => {
    return (
      <div>
        <BigCard cardData={cardData}/>
      </div>
    );
  });
}
