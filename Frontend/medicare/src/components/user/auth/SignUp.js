import React from "react";
import "../../../style/auth/login.css";
import UserAuthContext from "../../../context/user/auth/userAuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const userAuthContext = React.useContext(UserAuthContext);
  const { userSignup, login, user, signup } = userAuthContext;

  const [loginUser, setLogin] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  React.useEffect(() => {
    if (signup) {
      navigate("/userLogin");
    }
  }, [signup]);

  const { name, email, phone, address, password } = loginUser;

  const onChange = (e) =>
    setLogin({ ...loginUser, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name != "" &&
      email != "" &&
      phone != "" &&
      address != "" &&
      password != ""
    )
      userSignup({
        loginUser,
      });
  };

  console.log(user);
  return (
    <div className="login">
      <div className="login-container">
        <span className="form__title">Login</span>
        <form className="form" onSubmit={onSubmit}>
          <div className="form__group">
            <i className="ri-user-line form__icon"></i>
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              className="form__input"
              value={name}
              onChange={onChange}
            />
            <span className="form__bar"></span>
          </div>
          <div className="form__group">
            <i className="ri-mail-line form__icon"></i>
            <input
              type="text"
              placeholder="Email"
              name="email"
              required
              className="form__input"
              value={email}
              onChange={onChange}
            />
            <span className="form__bar"></span>
          </div>
          <div className="form__group">
            <i className="ri-mail-line form__icon"></i>
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              required
              className="form__input"
              value={phone}
              onChange={onChange}
            />
            <span className="form__bar"></span>
          </div>
          <div className="form__group">
            <i className="ri-mail-line form__icon"></i>
            <input
              type="text"
              placeholder="Address"
              name="address"
              required
              className="form__input"
              value={address}
              onChange={onChange}
            />
            <span className="form__bar"></span>
          </div>
          <div className="form__group">
            <i className="ri-mail-line form__icon"></i>
            <input
              type="Password"
              placeholder="Password"
              name="password"
              required
              className="form__input"
              value={password}
              onChange={onChange}
            />
            <span className="form__bar"></span>
          </div>

          <button type="submit" className="form__button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
