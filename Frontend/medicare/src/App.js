import { Fragment } from "react";
import "./App.css";
import AuthState from "./context/admin/auth/AuthState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminLogin from "./components/admin/auth/Login";
import Home from "./components/admin/pages/Home";

const App = () => {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
          </Routes>
        </Fragment>
      </Router>
    </AuthState>
  );
};

export default App;
