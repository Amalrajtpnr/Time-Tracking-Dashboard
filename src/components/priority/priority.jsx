import React from "react";
import "./priority.css";
import scroll from "../../assets/icon-ellipsis.svg";

function Tracker(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        backgroundImage: `url(${props.image})`,
      }}
      className="work"
    >
      {/* <img src={bag} alt="" className="suitcase" /> */}
      <div className="first-priority">
        <div className="title">
          <h1 className="head">{props.head}</h1>
          <img src={scroll} alt="" className="options" />
        </div>
        <div className="duration">
          <h1 className="hours">{props.hours}hrs</h1>
          <h1 className="last-week">Last week-{props.week}hrs</h1>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
