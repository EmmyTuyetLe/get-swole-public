import React from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const WorkOutCard = () => {
  const { Panel } = Collapse;

  const titleText = "Workout Title";
  // const titleText = "Workout Title";
  const genreText = "Type of Exercises";
  const detailText =
    "SDetails of howmany days a week, maybe personal maxes I dont know yet";

  return (
    <Collapse
      defaultActiveKey={["1"]}
      bordered={false}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      className="site-collapse-custom-collapse"
    >
      <Panel className="site-collapse-custom-panel" header={titleText} key="1">
        <div className="container-fluid">
          <div className="row">
            <p>{genreText}</p>
          </div>
          <div className="row">
            <p>{detailText}</p>
          </div>
          <p>Icon/action button to begin workout</p>
        </div>
      </Panel>
    </Collapse>
  );
};

export default WorkOutCard;
