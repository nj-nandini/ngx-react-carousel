import React, { FC, useState } from "react";
import "../../App.css";
import { Item } from "../item";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
  faArrowLeft,
  faArrowRight,
  faFilter
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CarouselData } from "../../types";

export const Carousel: FC<CarouselData> = ({ items, active }: CarouselData) => {
  const [activeItem, setActiveItem] = useState<number>(active);
  const [direction, setDirection] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [cardItems, setCardItems] = useState(items);
  let categories: string[] = items
    .map(item => item.category)
    .filter((it, i, ar) => ar.indexOf(it) === i);
  const [selectedCategory, setSelectedCategory] = useState(categories);

  const generateItems = () => {
    var itemsData = [];
    var level;
    if (cardItems && cardItems.length > 0) {
      for (var i = activeItem - 1; i < activeItem + 2; i++) {
        var index = i;
        if (i < 0) {
          index = cardItems.length + i;
        } else if (i >= cardItems.length) {
          index = i % cardItems.length;
        }
        level = activeItem - i;
        itemsData.push(
          <Item key={index} item={cardItems[index]} level={level} />
        );
      }
    }
    return itemsData;
  };

  const moveLeft = () => {
    var newActive = activeItem;
    newActive--;
    setActiveItem(newActive < 0 ? cardItems.length - 1 : newActive);
    setDirection("left");
  };

  const moveRight = () => {
    var newActive = activeItem;
    setActiveItem((newActive + 1) % cardItems.length);
    setDirection("right");
  };
  const toggle = () => {
    setShowFilter(!showFilter);
    if (showFilter) {
      setCardItems(() =>
        items.filter(item =>
          selectedCategory.find(category => category === item.category)
        )
      );
    }
  };
  const onFilterCheck = (e: any) => {
    if (e.target.checked) {
      setSelectedCategory(categories => [...categories, e.target.value]);
    } else {
      const index = selectedCategory.indexOf(e.target.value);

      if (index > -1) {
        const categories = selectedCategory;
        categories.splice(index, 1);
        setSelectedCategory(categories);
      }
    }
  };
  return (
    <div className="carousel-container">
      <div className="filter-icon">
        <FontAwesomeIcon icon={faFilter} onClick={toggle} />
      </div>
      {showFilter && (
        <div className="filter">
          <ul>
            {categories.map((category, i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  defaultChecked={
                    !!selectedCategory.find(cate => cate === category)
                  }
                  value={category}
                  onChange={onFilterCheck}
                />
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={moveLeft}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <ReactCSSTransitionGroup
          transitionName={direction}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {generateItems()}
        </ReactCSSTransitionGroup>
        <div className="arrow arrow-right" onClick={moveRight}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};
