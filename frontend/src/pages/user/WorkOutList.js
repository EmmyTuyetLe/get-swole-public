import React from "react";
import UserNav from "../../components/nav/UserNav";
import WorkOutCard from "../../components/card/WorkOutCard";
import NewExerciseCard from "../../components/card/NewExerciseCard";
import { Row, Col, Divider, Button } from "antd";

const WorkOutList = () => (
  <Row justify="center">
    <UserNav />
    <Col span={20}>
      <h1>This is The page that Shows the List of Workouts and details </h1>
      <WorkOutCard />
      <WorkOutCard />
      <WorkOutCard />
      <WorkOutCard />
      {/* these are hard coded, need to implement to a map or array that holds the work out details */}
      <Divider orientation="left">Add Workout?</Divider>
      <Button>Add to Workout</Button>
      {/* Should take user to NEW work out page */}
      {/* figure out way to have the values add to new Exercise Card */}
    </Col>
  </Row>
);

export default WorkOutList;
