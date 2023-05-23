import React from "react";
import "../../../style/auth/login.css";
import AuthContext from "../../../context/admin/auth/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const authContext = React.useContext(AuthContext);
  const { userLogin, adminLogin, admin } = authContext;

  const [loginUser, setLogin] = React.useState({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    if (adminLogin) {
      navigate("/");
    }
  }, [adminLogin]);

  console.log(admin);

  const { email, password } = loginUser;

  const onChange = (e) =>
    setLogin({ ...loginUser, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password != "" && email != "") userLogin(loginUser);
  };

  return (
    <div className="login">
      <div className="login-container">
        <span className="form__title">Admin</span>
        <form className="form" onSubmit={onSubmit}>
          <div className="form__group">
            <i className="ri-user-line form__icon"></i>
            <input
              type="text"
              placeholder="Name"
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
              placeholder="Email"
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
