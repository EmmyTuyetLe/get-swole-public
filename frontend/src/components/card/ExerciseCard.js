import React from "react";
import {
  Table,
  Badge,
  Menu,
  Dropdown,
  Space,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
} from "antd";
import { DownOutlined } from "@ant-design/icons";

// implement editable table into this as well
// https://ant.design/components/table/

const menu = (
  <Menu>
    <Menu.Item>Next</Menu.Item>
    {/* Next Will indicate it was finished */}
    <Menu.Item>Skip</Menu.Item>
    {/* Skips will Grey Out workout */}
  </Menu>
);
const ExerciseCard = () => {
  const expandedRowRender = () => {
    const columns = [
      { title: "Set", dataIndex: "sets", key: "sets", editable: true },
      { title: "Reps", dataIndex: "reps", key: "reps", editable: true },
      { title: "Lbs", dataIndex: "lbs", key: "lbs", editable: true },
      {
        title: "Finished",
        key: "state",
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      {
        title: "Set Complete?",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <Space size="middle">
            <a>Finished</a>
            <a>Skip</a>
            <a>Edit</a>
          </Space>
        ),
      },
    ];
    const data = [];
    // Come back and change to map, all so this is hard codded for exapmple
    for (let i = 0; i < 3; i++) {
      data.push({
        key: i.toString(),
        sets: `${i + 1}`,
        reps: "10",
        lbs: "135",
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    { title: "Number", dataIndex: "number", key: "number" },
    { title: "Muscle", dataIndex: "muscle", key: "muscle" },
    { title: "Exercise", dataIndex: "exercise", key: "exercise" },
    { title: "RepsBySet", dataIndex: "repsbyset", key: "repsbyset" },
    {
      title: "Moving On",
      key: "operation",
      render: () => (
        <Space size="middle">
          <Dropdown overlay={menu}>
            <a>
              <DownOutlined />
            </a>
          </Dropdown>
        </Space>
      ),
    },
    //
  ];

  const data = [];
  // Come back and change to map, all so this is hard codded for exapmple
  for (let i = 0; i < 1; i++) {
    data.push({
      key: i,
      number: 1,
      muscle: "Chest",
      exercise: "Bench Press",
      repsbyset: "10, 10, 10",
      // will be an array of number of reps by how many sets
    });
  }

  return (
    <div>
      <Table
        className="components-table-demo-nested"
        columns={columns}
        expandable={{ expandedRowRender }}
        dataSource={data}
        pagination={false}
      />
      <br />
    </div>
  );
};

export default ExerciseCard;
