import React from "react";
import UserContext from "../../../../context/user/user/userContext";
import { Link } from "react-router-dom";
import "../../../../style/pages/confirmation.css";
import ConfirmationItem from "./ConfirmationItem";
import "../../../../style/pages/medicine.css";
import "../../../../style/pages/shipping.css";

const Confirmation = () => {
  const userContext = React.useContext(UserContext);

  const { getCartItems, cartItems, deleteCartItems } = userContext;
  React.useEffect(() => {
    getCartItems(parseData);
  }, []);
  var parseData;
  const storeData = localStorage.getItem("user");
  if (storeData) {
    parseData = JSON.parse(storeData);
  }

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

  console.log(cartItems);

  return (
    parseData3 &&
    parseData2.addresss && (
      <div className="confirmation-container">
        <h2>Order Confirmation</h2>
        <div className="address-section">
          <h3>Delivery Address:</h3>
          <p>{parseData2.addresss}</p>
          <p>
            {parseData2.zipcodes}, {parseData2.states}
          </p>
        </div>
        <div className="medicines-section">
          <h3>Medicines:</h3>
          <ul>
            {cartItems.data ? (
              cartItems.data.map((item) => (
                <ConfirmationItem key={item.id} item={item} user={parseData} />
              ))
            ) : (
              <h1>No data</h1>
            )}
          </ul>
        </div>
        <hr />
        <div className="priceDetail totalpayable confirmation-price">
          <span className="pricesave">
            Total
            <span className="pricesave pay-item">
              $ {parseData3.totalAmount}.00
            </span>
          </span>
        </div>

        <div className="priceDetail totalsaving confirmation-price">
          <span className="pricesave">
            Total Savings
            <span className="pricesave pay-item ">
              $ {parseData3.addDiscount}.00
            </span>
          </span>
        </div>

        <div className="thankyou-section">
          <h2>Thank you for using Medicare!</h2>
        </div>
        <h3>
          Back to&nbsp;
          <Link to="/userHome">Home</Link>
        </h3>
      </div>
    )
  );
};

export default Confirmation;
