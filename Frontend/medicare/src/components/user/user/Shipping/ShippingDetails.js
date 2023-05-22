import React from "react";
import Navbar from "../../layout/Navbar";
import "../../../../style/pages/shipping.css";
import { useNavigate } from "react-router-dom";
const ShippingDetails = () => {
  const navigate = useNavigate();
  var parseData;
  const storeData = localStorage.getItem("user");
  if (storeData) {
    parseData = JSON.parse(storeData);
    console.log(parseData);
  }

  var parseData2;
  const storeData2 = localStorage.getItem("payment");
  if (storeData2) {
    parseData2 = JSON.parse(storeData2);
    console.log(parseData2);
  }
  const { name, address, phone, email } = parseData;

  const [shipping, setShipping] = React.useState({
    names: name,
    emails: email,
    phones: phone,
    addresss: address,
    zipcodes: "",
    citys: "",
    states: "",
  });

  const { names, emails, phones, addresss, zipcodes, citys, states } = shipping;

  const onChange = (e) =>
    setShipping({ ...shipping, [e.target.name]: e.target.value });

  const onClick = (e) => {
    localStorage.setItem("shipping", JSON.stringify(shipping));
    navigate("/userPay");
  };

  return (
    parseData2 && (
      <div>
        <Navbar name={name} />
        <div className="containers">
          <h1 className="shippingHead">Shipping</h1>
          <p>Please enter your shipping details.</p>
          <hr />
          <form className="forms">
            <div className="fields fields--2">
              <label className="field">
                <span className="field__label" for="firstname">
                  Name
                </span>
                <input
                  className="field__input"
                  type="text"
                  id="firstname"
                  value={names}
                  name="names"
                  required
                  onChange={onChange}
                />
              </label>
              <label className="field">
                <span className="field__label" for="lastname">
                  Phone
                </span>
                <input
                  className="field__input"
                  type="text"
                  id="lastname"
                  value={phones}
                  required
                  name="phones"
                  onChange={onChange}
                />
              </label>
            </div>
            <label className="field">
              <span className="field__label" for="address">
                Email
              </span>
              <input
                className="field__input"
                type="text"
                id="address"
                value={emails}
                required
                name="emails"
                onChange={onChange}
              />
            </label>
            <label className="field">
              <span className="field__label" for="country">
                Address
              </span>
              <input
                className="field__input"
                type="text"
                id="addressField"
                value={addresss}
                required
                name="addresss"
                onChange={onChange}
              />
            </label>
            <div className="fields fields--3">
              <label className="field">
                <span className="field__label" for="zipcode">
                  Zip code
                </span>
                <input
                  className="field__input"
                  type="text"
                  id="zipcodes"
                  value={zipcodes}
                  required
                  name="zipcodes"
                  onChange={onChange}
                />
              </label>
              <label className="field">
                <span className="field__label" for="city">
                  City
                </span>
                <input
                  className="field__input"
                  type="text"
                  id="city"
                  name="citys"
                  required
                  value={citys}
                  onChange={onChange}
                />
              </label>
              <label className="field">
                <span className="field__label" for="state">
                  State
                </span>
                <input
                  className="field__input"
                  type="text"
                  name="states"
                  onChange={onChange}
                  required
                  value={states}
                />
              </label>
            </div>
          </form>
          <hr />
          <button className="button" onClick={onClick}>
            Continue
          </button>
        </div>
      </div>
    )
  );
};

export default ShippingDetails;
