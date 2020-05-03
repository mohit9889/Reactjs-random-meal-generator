import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import HomeScreen from "./HomeScreen";
import MealScreen from "./MealScreen";

export default function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/MealScreen" component={MealScreen} />
        </Switch>
      </Router>
    </div>
  );
}
