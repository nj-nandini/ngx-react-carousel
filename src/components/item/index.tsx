import React, { FC } from "react";
import "../../App.css";
import { ItemData } from "../../types";
export const Item: FC<{ level: number; item: ItemData }> = ({
  level,
  item
}) => {
  const className = "item level" + level;
  return (
    <div className={className}>
      <img className="item-img" src={item.image} alt="item pic" />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <p>{item.category}</p>
      </div>
    </div>
  );
};
