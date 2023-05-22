import { Fragment } from "react";
import "./App.css";
import AuthState from "./context/admin/auth/AuthState";
import AdminState from "./context/admin/admin/AdminState";
import UserAuthState from "./context/user/auth/UserAuthState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import setAuthToken from "./components/utils/setAuthToken";
import AdminLogin from "./components/admin/auth/Login";
import AdminHome from "./components/admin/pages/AdminHome";
import UserLogin from "./components/user/auth/Login";
import UserSignup from "./components/user/auth/SignUp";
import Home from "./components/user/pages/Home";
import UserState from "./context/user/user/UserState";
import Cart from "./components/user/user/Cart/Cart";
import ShippingDetails from "./components/user/user/Shipping/ShippingDetails";
import Payment from "./components/user/user/Payment/Pay";
import Confirmation from "./components/user/user/Confirmation/Confirmation";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <AdminState>
        <UserAuthState>
          <UserState>
            <Router>
              <Fragment>
                <Routes>
                  <Route path="/" element={<AdminHome />} />
                  <Route path="/adminLogin" element={<AdminLogin />} />
                  <Route path="/userLogin" element={<UserLogin />} />
                  <Route path="/userSignup" element={<UserSignup />} />
                  <Route path="/userHome" element={<Home />} />
                  <Route path="/userCart" element={<Cart />} />
                  <Route path="/userShipping" element={<ShippingDetails />} />
                  <Route path="/userPay" element={<Payment />} />
                  <Route path="/userConfirmation" element={<Confirmation />} />
                </Routes>
              </Fragment>
            </Router>
          </UserState>
        </UserAuthState>
      </AdminState>
    </AuthState>
  );
};

export default App;
