import React from "react";
import { Link } from "react-router-dom";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper grey darken-3">
        <Link to="/" className="brand-logo">
          Planner
        </Link>
        {/* <SignedOutLinks /> */}
        <SignedInLinks />
      </div>
    </nav>
  );
};

export default Navbar;
