import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../store/actions/authActions";

const SignedInLinks = ({ signOut, profile }) => {
  console.log(profile);

  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <button onClick={signOut}>Log Out</button>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

const mapStateToProps = dispatch => {};

export default connect(null, mapDispatchToProps)(SignedInLinks);
