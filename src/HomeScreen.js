import React, { useState } from "react";
import history from "./history";
import "./styles.css";

export default function HomeScreen() {
  const mealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  const [mealData, setMealData] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  const getMealdata = async () => {
    const response = await fetch(mealUrl);
    const data = await response.json();
    setMealData(data["meals"][0]);
    //console.log(mealData);
    setIsPressed(true);
  };

  const navigateMealScreen = () => {
    //console.log(mealData);
    history.push({ pathname: "/MealScreen", data: mealData });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Feeling Hungery?</h1>
        <h2>Get a random meal by clicking below</h2>
        <button onClick={getMealdata}>
          Get Meal{" "}
          <span role="img" aria-label="food">
            🍔
          </span>
        </button>
      </div>
      <div className={isPressed ? "meal-container" : "hidden"}>
        <img src={mealData["strMealThumb"]} alt="" />
        <button onClick={navigateMealScreen}>See Meal Details</button>
      </div>
    </div>
  );
}
