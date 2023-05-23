import React from "react";
import UserContext from "../../../../context/user/user/userContext";
import CartItem from "./CartItem";
import Navbar from "../../layout/Navbar";
import PaymentItem from "./PaymentItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const userContext = React.useContext(UserContext);
  const { getCartItems, cartItems } = userContext;
  var parseData;
  const storeData = localStorage.getItem("user");
  if (storeData) {
    parseData = JSON.parse(storeData);
    console.log(parseData);
  }
  console.log(localStorage.getItem("user"));
  React.useEffect(() => {
    getCartItems(parseData);
    // eslint-disable-next-line
  }, []);
  console.log(cartItems);
  return (
    <div>
      <Navbar name={parseData.name} />
      <div className="cart">
        <div className="cartContainer">
          {cartItems.data ? (
            <ul>
              {cartItems.data.map((item) => (
                <CartItem key={item.id} item={item} user={parseData} />
              ))}
            </ul>
          ) : (
            <h1>
              Add items to cart <Link to="/userHome">click here</Link>
            </h1>
          )}
        </div>
        <div>
          <PaymentItem cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
