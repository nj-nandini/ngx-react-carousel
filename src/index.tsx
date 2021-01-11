import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Carousel } from "../src/components/carousel";
import reportWebVitals from "./reportWebVitals";

const items = [
  {
    id: 1,
    name: "Product1",
    price: 1000,
    image: "https://picsum.photos/id/54/400/300",
    category: "Category1"
  },
  {
    id: 2,
    name: "Product2",
    price: 1000,
    image: "https://picsum.photos/id/54/400/300",
    category: "Category2"
  },
  {
    id: 3,
    name: "Product3",
    price: 1000,
    image: "https://picsum.photos/id/54/400/300",
    category: "Category1"
  },
  {
    id: 4,
    name: "Product4",
    price: 1000,
    image: "https://picsum.photos/id/54/400/300",
    category: "Category4"
  },
  {
    id: 5,
    name: "Product5",
    price: 1000,
    image: "https://picsum.photos/id/54/400/300",
    category: "Category5"
  },
  {
    id: 6,
    name: "Product6",
    price: 1000,
    image: "https://picsum.photos/id/54/400/300",
    category: "Category5"
  }
];
ReactDOM.render(
  <Carousel items={items} active={2} />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
