import React from "react";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PaymentItem = ({ cartItems }) => {
  const navigate = useNavigate();
  const { data } = cartItems;
  console.log(data);

  var mrp = 0;
  var addDiscount = 0;
  var totalAmount = 0;
  var total = 0;
  var savings = 0;

  {
    data &&
      data.map(
        (item) => (
          (mrp += item.medicine.price * 1),
          (addDiscount += (item.medicine.price * item.medicine.offers) / 100),
          (totalAmount +=
            item.medicine.price -
            (item.medicine.price * item.medicine.offers) / 100),
          (total +=
            item.medicine.price -
            (item.medicine.price * item.medicine.offers) / 100),
          (savings += (item.medicine.price * item.medicine.offers) / 100)
        )
      );
  }

  const onclick = () => {
    const payment = {
      mrp: mrp,
      addDiscount: addDiscount,
      totalAmount: totalAmount,
      total: total,
    };

    localStorage.setItem("payment", JSON.stringify(payment));
    navigate("/userShipping");
  };
  return (
    <div className="payment">
      <h3 className="payDetail">PAYMENT DETAILS </h3>
      <p className="priceDetail">
        MRP Total<span className="price pay-item">$ {mrp}.00</span>
      </p>
      <p className="priceDetail">
        Additional Discount
        <span className="price pay-item">- $ {addDiscount}.00</span>
      </p>
      <p className="priceDetail ">
        Total Amout<span className="price pay-item">$ {totalAmount}.00</span>
      </p>

      <p className="priceDetail totalpayable">
        <span className="pricesave">
          Total Payable
          <span className="pricesave pay-item">$ {totalAmount}.00</span>
        </span>
      </p>
      <p className="priceDetail totalsaving">
        <span className="pricesave">
          Total Savings
          <span className="pricesave pay-item">$ {savings}.00</span>
        </span>
      </p>
      <div className="totalprice">
        <div>
          <p className="totalpara">Total Payable</p>
          <p className="totalpay pay-item">$ {total}.00</p>
        </div>

        <button
          type="button"
          class="btn btn-success btn-color"
          onClick={onclick}
        >
          PROCEED
        </button>
      </div>
    </div>
  );
};

export default PaymentItem;
