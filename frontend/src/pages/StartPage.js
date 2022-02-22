import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import UserNav from "../components/nav/UserNav";

const StartPage = () => (
  <div className="container p-5">
    <div className="row">
      <UserNav />
    </div>
    <div className="col-md-6 offset-md-3">
      <h1>Get Swole</h1>
      <Button
        type="primary"
        className="mb-3 pt-2"
        block
        shape="round"
        size="large"
      >
        <Link to="/login">Log In</Link>
      </Button>
      <Button
        type="default"
        className="mb-3 pt-2"
        block
        shape="round"
        size="large"
      >
        <Link to="/register">Register</Link>
      </Button>
    </div>
  </div>
);

export default StartPage;
