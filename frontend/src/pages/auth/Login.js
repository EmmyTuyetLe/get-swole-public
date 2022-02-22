import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { auth, googleAuthProvider } from "../../firebase";
// import { createOrUpdateUser } from "../../functions/auth";
// import { toast } from "react-toastify";
import { Button } from "antd";
import {
  MailOutlined,
  GoogleOutlined,
  AppleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Work on set Loadin
  // const [loading, setLoading] = useState(false)

  // redux for user state

  // useEffect for when user signs in it goes back to previous page

  //useDispatch section for role based Redirects

  // handleSubmit for user and ID tokens
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  // google login section
  const googleLogin = async () => {
    //
  };

  // apple login section
  const appleLogin = async () => {
    //
  };
  // facebook login section
  const facebookLogin = async () => {
    //
  };

  // email/pass login section
  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          autoFocus
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
        />
      </div>
      <br />

      <Button
        onClick={handleSubmit}
        type="primary"
        className="mb-3"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
      >
        Login with Email/Password
      </Button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {/* Add Header in Title */}
          <p>Login</p>
          {/* Add signing in with Email */}
          {/* Password */}
          {loginForm()}
          {/* Sign in with Google */}
          <Button
            onClick={googleLogin}
            type="danger"
            className="mb-3"
            block
            shape="round"
            size="large"
            icon={<GoogleOutlined />}
          >
            Login with Google
          </Button>
          {/* Sign in with Apple */}
          <Button
            onClick={appleLogin}
            type="black"
            className="mb-3"
            block
            shape="round"
            size="large"
            icon={<AppleOutlined />}
          >
            Login with Apple
          </Button>
          {/* Sign in with Facebook */}
          <Button
            onClick={facebookLogin}
            type="primary"
            className="mb-3"
            block
            shape="round"
            size="large"
            icon={<FacebookOutlined />}
          >
            Login with Facebook... Maybe its its not to crowded
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
