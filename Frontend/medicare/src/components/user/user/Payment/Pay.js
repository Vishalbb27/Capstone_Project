import React from "react";
import "../../../../style/pages/payment.css";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const navigate = useNavigate()
  var parseData;
  const storeData = localStorage.getItem("payment");
  if (storeData) {
    parseData = JSON.parse(storeData);
    console.log(parseData);
  }
  var parseData3;
  const storeData3 = localStorage.getItem("shipping");
  if (storeData3) {
    parseData3 = JSON.parse(storeData3);
    console.log(parseData3);
  }
  const onClick = () =>{
    navigate("/userConfirmation")
  }
  return (
    (parseData && parseData3.addresss) && (
      <div className="payment-container">
        <div class="app-container">
          <div class="top-box">
            <h1>Payment Portal</h1>
          </div>

          <div class="middle-box">
            <h1>
              {parseData.total}
              <span>$</span>
            </h1>
            <p>Pay To Medicare Ltd</p>
          </div>

          <div class="bottom-box">
            <button type="button" class="payment-option-btn">
              Pay with Paypal
            </button>
            <button type="button" class="payment-option-btn">
              Pay with Netbanking
            </button>
          </div>

          <div class="card-details">
            <p>Pay using credit or debit card</p>
            <div class="card-num-field-group">
              <label>Card Number</label>
              <br />
              <input
                type="text"
                class="card-num-field"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
            </div>

            <div class="date-field-group">
              <label>Expiry Date</label>
              <br />
              <input type="text" class="date-field" placeholder="mm" />
              <input type="text" class="date-field" placeholder="yyyy" />
            </div>

            <div class="cvc-field-group">
              <label>CVC</label>
              <br />
              <input type="password" class="cvc-field" placeholder="xxx" />
            </div>

            <div class="name-field-group">
              <label>Card Holder Name</label>
              <br />
              <input type="text" class="name-field" placeholder="Full Name" />
            </div>

            <button type="button" class="pay-btn" onClick={onClick}>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Payment;
