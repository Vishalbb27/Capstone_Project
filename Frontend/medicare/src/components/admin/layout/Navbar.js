import React, { Fragment, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/admin/auth/authContext";
import AdminContext from "../../../context/admin/admin/adminContext";

import { useNavigate } from "react-router-dom";

const Navbar = ({ title, icon, name }) => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const adminContext = useContext(AdminContext);
  const { adminLogin, admin } = authContext;

  const { clearContacts } = adminContext;
  const onLogout = () => {
    localStorage.removeItem("admin")
    navigate("/adminLogin");
  };
  console.log(name);
  const authLinks = (
    <Fragment>
      <li>Hello {name ? name : <span>Data Not found</span>}</li>
      <li>
        <a href="#!" onClick={onLogout} className="navbar-brand text-white">
          <span className="">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      {/* <li>
        <Link className="text-white" to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link className="text-white" to="/login">
          Login
        </Link>
      </li> */}
    </Fragment>
  );

  return (
    <nav className="navbar  bg-primary text-white">
      <a className="navbar-brand text-white" href="#">
        <i className={icon}></i> {title}
      </a>
      <ul className="navbar-nav">{name ? authLinks : guestLinks}</ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Medicine Inventory",
  icon: "fas fa-id-card-alt",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
