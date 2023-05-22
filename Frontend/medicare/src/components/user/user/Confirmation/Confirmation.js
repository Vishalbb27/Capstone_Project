import React from "react";
import UserContext from "../../../../context/user/user/userContext";
import { Link } from "react-router-dom";
import "../../../../style/pages/confirmation.css";

const Confirmation = () => {
  const userContext = React.useContext(UserContext);
  const { getCartItems, cartItems, deleteCartItems } = userContext;
  var parseData;
  const storeData = localStorage.getItem("user");
  if (storeData) {
    parseData = JSON.parse(storeData);
  }

  var displaydata = null;
  React.useEffect(() => {
    getCartItems(parseData);
  }, []);

  var parseData2;
  const storeData2 = localStorage.getItem("shipping");
  if (storeData2) {
    parseData2 = JSON.parse(storeData2);
  }

  var parseData3;
  const storeData3 = localStorage.getItem("payment");
  if (storeData3) {
    parseData3 = JSON.parse(storeData3);
  }

  displaydata=cartItems
  console.log(displaydata);
  console.log(cartItems);

  return (
    parseData3 &&
    parseData2.addresss && (
      <div className="confirmation-container">
        <h2>Confirmation Page</h2>
        <div className="address-section">
          <h3>Delivery Address:</h3>
          <p>{parseData2.addresss}</p>
        </div>
        <div className="medicines-section">
          <h3>Medicines:</h3>
          <ul>
            {cartItems &&
              cartItems.data.map((medicine, index) => (
                <li key={index}>
                  <span>{medicine.medicine.name}</span>
                  <span>{medicine.medicine.price}</span>
                </li>
              ))}
          </ul>
        </div>
        <div className="total-amount-section">
          <h3>Total Amount:</h3>
          <p>{parseData3.total}</p>
        </div>
        <div className="thankyou-section">
          <p>Thank you for using Medicare!</p>
        </div>
        <p>
          Back to
          <Link to="/userHome" className="back-link">
            Home
          </Link>
        </p>
      </div>
    )
  );
};

export default Confirmation;
