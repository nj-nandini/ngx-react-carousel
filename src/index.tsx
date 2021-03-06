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
    image: "https://picsum.photos/id/124/400/300",
    category: "Category2"
  },
  {
    id: 3,
    name: "Product3",
    price: 1000,
    image: "https://picsum.photos/id/128/400/300",
    category: "Category1"
  },
  {
    id: 4,
    name: "Product4",
    price: 1000,
    image: "https://picsum.photos/id/13/400/300",
    category: "Category4"
  },
  {
    id: 5,
    name: "Product5",
    price: 1000,
    image: "https://picsum.photos/id/132/400/300",
    category: "Category5"
  },
  {
    id: 6,
    name: "Product6",
    price: 1000,
    image: "https://picsum.photos/id/133/400/300",
    category: "Category5"
  }
];
ReactDOM.render(
  <Carousel items={items} active={2} />,
  document.getElementById("root")
);

reportWebVitals();
