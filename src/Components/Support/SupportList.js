import React from "react";
import Support from "./Support";
import "./Support.css";

export default function SupportList(props) {
  return props.products.map((p, i) => {
    return (
      <div>
        <Support product={p} key={i} />
      </div>
    );
  });
}
