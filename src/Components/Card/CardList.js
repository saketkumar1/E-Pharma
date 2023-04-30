import React from "react";
import Card from "./Card";

export default function CardList(props) {
  return props.CardData.map((CardData) => {
    return (
      <div>
        <Card CardData={CardData} addCart={props.addCart} />
      </div>
    );
  });
}
