import React from "react";
import { Input, Select, InputNumber, Button } from "antd";

const NewExerciseCard = () => {
  const { Option } = Select;
  return (
    <Input.Group compact>
      <Select defaultValue="Option1">
        <Option value="Option1">Option1</Option>
        <Option value="Option2">Option2</Option>
      </Select>
      <Input style={{ width: "50%" }} defaultValue="input content" />
      <InputNumber />
      <Button>Add to Workout</Button>
    </Input.Group>
  );
};
export default NewExerciseCard;
