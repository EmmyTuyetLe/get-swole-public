import React from "react";
import { Switch, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Home from "./pages/Home";
import Profile from "./pages/user/Profile";
import Login from "./pages/auth/Login";
import SignOut from "./pages/auth/SignOut";
import Register from "./pages/auth/Register";
import WorkOutList from "./pages/user/WorkOutList";
import ExerciseList from "./pages/user/ExerciseList";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={StartPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/user/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signout" component={SignOut} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/user/workoutlist" component={WorkOutList} />
      <Route exact path="/user/exerciselist" component={ExerciseList} />
    </Switch>
  );
};

export default App;
