import React from "react";
import UserNav from "../../components/nav/UserNav";

const Profile = () => (
  <div>
    <div className="container-fluid">
      <div className="row">
        <UserNav />
      </div>
      <div className="col">
        <h1>This is The page that will show the users Profile/settings</h1>
      </div>
    </div>
  </div>
);

export default Profile;
