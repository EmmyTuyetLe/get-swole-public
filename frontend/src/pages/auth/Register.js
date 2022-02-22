import React, { useState } from "react";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

const Register = () => {
  const [email, setEmail] = useState("");

  const registerForm = () => (
    <form>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        autoFocus
      />
      <Button
        type="primary"
        className="mb-3 pt-2"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email}
      >
        Register
      </Button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};
export default Register;
