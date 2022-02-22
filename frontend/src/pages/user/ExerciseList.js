import React from "react";
import UserNav from "../../components/nav/UserNav";
import ExerciseCard from "../../components/card/ExerciseCard";
import NewExerciseCard from "../../components/card/NewExerciseCard";
import { Row, Col, Divider } from "antd";

const ExerciseList = () => (
  <Row justify="center">
    <UserNav />
    <Col span={20}>
      <h1>This is The pages that shows list user ACTIVE EXERCISES </h1>
      <h4>
        most of page will be blurred and greyed out as the one workout is
        focused on
      </h4>
      <ExerciseCard />
      <ExerciseCard />
      <ExerciseCard />
      <ExerciseCard />
      {/* these are hard coded, need to implement to a map or array that holds the work out details */}
      <Divider orientation="left">Add an Exercise?</Divider>
      <h4>
        Cahnge this so the format has a addition icon next to it and make more
        clear on how it applies to work out
      </h4>
      <NewExerciseCard />
      {/* figure out way to have the values add to new Exercise Card */}
    </Col>
  </Row>
);

export default ExerciseList;
