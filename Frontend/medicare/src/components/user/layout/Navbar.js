import React, { useEffect } from "react";
import "../../../style/layout/navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserAuthContext from "../../../context/user/auth/userAuthContext";
import UserContext from "../../../context/user/user/userContext";

const Navbar = ({ name }) => {
  const navigate = useNavigate();
  const userAuthContext = React.useContext(UserAuthContext);
  const { user, login, logout } = userAuthContext;

  const useContext = React.useContext(UserContext);
  const { setHome, setCart, setPayment } = useContext;

  const homeClick = () => {
    setHome(true);
    setCart(false);
    setPayment(false);
  };

  const cartClick = () => {
    setCart(true);
    setHome(false);
    setPayment(false);
  };

  const paymentClick = () => {
    setPayment(true);
    setHome(false);
    setCart(false);
  };

  useEffect(() => {
    const indicator = document.querySelector(".nav-indicator");
    const items = document.querySelectorAll(".nav-item");

    function handleIndicator(el) {
      items.forEach((item) => {
        item.classList.remove("is-active");
        item.removeAttribute("style");
      });

      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
      indicator.style.backgroundColor = el.getAttribute("active-color");

      el.classList.add("is-active");
      el.style.color = el.getAttribute("active-color");
    }

    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        handleIndicator(e.target);
      });
      item.classList.contains("is-active") && handleIndicator(item);
    });
  }, [login]);

  const logoutuser = () => {
    navigate("/userLogin");
    logout();
  };
  //if any of the below link is clicked then the indicator will be shown on that link
  const handleIndicator = (el) => {
    const indicator = document.querySelector(".nav-indicator");
    const items = document.querySelectorAll(".nav-item");
    items.forEach((item) => {
      item.classList.remove("is-active");
      item.removeAttribute("style");
    });

    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
    indicator.style.backgroundColor = el.getAttribute("active-color");

    el.classList.add("is-active");
    el.style.color = el.getAttribute("active-color");
  };

  return (
    <React.Fragment>
      {name && (
        <div className="nav-container">
          <h1 className="title">Medicare</h1>
          <nav className="nav">
            <Link
              to="/userHome"
              className="nav-item is-active"
              active-color="orange"
              onClick={homeClick}
            >
              Home
            </Link>
            <Link
              to="/userCart"
              className="nav-item"
              active-color="green"
              onClick={cartClick}
            >
              Cart
            </Link>
            <Link
              to="/userShipping"
              className="nav-item"
              active-color="blue"
              onClick={paymentClick}
            >
              Shipping
            </Link>

            <Link
              to="/userLogin"
              className="nav-item"
              active-color="red"
              onClick={logoutuser}
            >
              Logout
            </Link>
            <span className="nav-indicator" />
          </nav>
          <div className="name">
            <i className="ri-user-line form__icon"></i>
            {name}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
