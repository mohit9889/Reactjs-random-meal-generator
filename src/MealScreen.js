import React from "react";
import "./mealScreen.css";
import history from "./history";

function MealScreen(props) {
  const { data } = history.location;

  return (
    <div className="container">
      <div className="content-meal">
        <img src={data["strMealThumb"]} alt="mealimage" />
        <h3>Area : {data["strArea"]}</h3>
        <h3>Tag : {data["strTags"]}</h3>
        <h3>Category : {data["strCategory"]}</h3>
      </div>
      <div className="discreption-meal">
        <h1>{data["strMeal"]}</h1>
        <p>{data["strInstructions"]}</p>
      </div>
    </div>
  );
}

export default MealScreen;
