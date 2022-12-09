import "./App.css";
import jeremy from "./assets/image-jeremy.png";
import Tracker from "./components/priority/priority";
import bag from "./assets/icon-work.svg";
import exercise from "./assets/icon-exercise.svg";
import study from "./assets/icon-study.svg";
import social from "./assets/icon-social.svg";
import play from "./assets/icon-play.svg";
import care from "./assets/icon-self-care.svg"
import json from "./data.json";
import { useState } from "react";

function App() {
  const [time, setTime] = useState("daily");
  const images = [bag, play, study, exercise, social,care];
const colors = ["hsl(15, 100%, 70%)","hsl(195, 74%, 62%)", "hsl(348, 100%, 68%)","hsl(145, 58%, 55%)"," hsl(264, 64%, 52%)","hsl(43, 84%, 65%)"]

  function dashboard(index) {
    if (time == "daily") {
      return {
        current: json[index].timeframes.daily.current,
        previous: json[index].timeframes.daily.previous,
      };
    } else if (time == "weekly") {
      return {
        current: json[index].timeframes.weekly.current,
        previous: json[index].timeframes.weekly.previous,
      };
    } else {
      return {
        current: json[index].timeframes.monthly.current,
        previous: json[index].timeframes.monthly.previous,
      };
    }
  }
  return (
    <div className="App">
      <div className="main">
        <div className="profile">
          <div className="person">
            <img src={jeremy} alt="" className="jeremy" />
            <div className="identity">
              <h1 className="for">Report for</h1>
              <h1 className="name">Jeremy Robson</h1>
            </div>
          </div>
          <div className="categories">
            <h1 style={{color : time== "daily" ? " hsl(235, 45%, 61%)" : "white" }} onClick={() => setTime("daily")} className="daily">
              Daily
            </h1>
            <h1 style={{color : time== "weekly" ? " hsl(235, 45%, 61%)" : "white" }} onClick={() => setTime("weekly")} className="weekly">
              Weekly
            </h1>
            <h1 style={{color : time== "monthly" ? " hsl(235, 45%, 61%)" : "white" }} onClick={() => setTime("monthly")} className="monthly">
              Monthly
            </h1>
          </div>
        </div>
        <div className="month">
          {json.map((item, index) => {
            return (
              <Tracker
                color={colors[index]}
                head={item.title}
                hours={dashboard(index).current}
                week={dashboard(index).previous}
                image={images[index]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
