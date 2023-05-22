import React from "react";
import "../../../style/auth/login.css";
import UserAuthContext from "../../../context/user/auth/userAuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userAuthContext = React.useContext(UserAuthContext);
  const { userLogin, login, user } = userAuthContext;

  const [loginUser, setLogin] = React.useState({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    if (login) {
      navigate("/userHome");
    }
  }, [login]);

  const { email, password } = loginUser;

  const onChange = (e) =>
    setLogin({ ...loginUser, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email != "" && password != "")
      userLogin({
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
              placeholder="Email"
              required
              name="email"
              className="form__input"
              value={email}
              onChange={onChange}
            />
            <span className="form__bar"></span>
          </div>
          <div className="form__group">
            <i className="ri-mail-line form__icon"></i>
            <input
              type="password"
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

export default Login;
