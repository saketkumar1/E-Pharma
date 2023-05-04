import React from "react";
import Card from "./Card";
import Detail from "../Detail/Detail";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function CardList(props) {
  return props.CardData.map((CardData,i) => {
    return (
      <div>
        <Card
          CardData={CardData}
          key={i}
          index={i}
          addCart={props.addCart}
        ></Card>
      </div>
    );
  });
}
