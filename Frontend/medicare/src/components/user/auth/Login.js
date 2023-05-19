import React from "react";
import "../../style/pages/login.css";
import QuizContext from "../../context/quizz/quizContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const quizContext = React.useContext(QuizContext);
  const { userLogin, login, user } = quizContext;

  const [loginUser, setLogin] = React.useState({
    name: "",
    email: "",
  });

  React.useEffect(() => {
    if (login) {
      navigate("/");
    }
  }, [login]);

  const { name, email } = loginUser;

  const onChange = (e) =>
    setLogin({ ...loginUser, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name != "" && email != "")
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

          <button type="submit" className="form__button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
