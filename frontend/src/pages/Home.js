import React from "react";
import { Button } from "antd";
import UserNav from "../components/nav/UserNav";

const Home = () => (
  <div className="container p-5">
    <div className="row">
      <UserNav />
    </div>
    <div className="col-md-6 offset-md-3">
      <h1>This is only a test</h1>
      {/*  Logo Or NAme of App*/}
      <h1>Get Swole</h1>
      {/* Continue Button */}
      <Button
        type="primary"
        className="mb-3 pt-2"
        block
        shape="round"
        size="large"
      >
        Continue Workout
      </Button>
      {/* Start New Button */}
      <Button
        type="default"
        className="mb-3 pt-2"
        block
        shape="round"
        size="large"
      >
        Start New WOrkout
      </Button>
      {/*  Browse Other Workouts*/}
      <Button
        type="default"
        className="mb-3 pt-2"
        block
        shape="round"
        size="large"
      >
        Browse Workouts
      </Button>
    </div>
  </div>
);

export default Home;
