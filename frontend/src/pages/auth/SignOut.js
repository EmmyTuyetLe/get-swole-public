import React from "react";
import UserNav from "../../components/nav/UserNav";

const SignOut = () => (
  <div>
    <div className="container-fluid">
      <div className="row">
        <UserNav />
      </div>
      <div className="col">
        <h1>
          This is The page that will show the users attempt to sign Out, taking
          the user token out of the
        </h1>
      </div>
    </div>
  </div>
);
export default SignOut;
