import React from "react";
import "../../../../style/pages/medicine.css";
import UserAuthContext from "../../../../context/user/auth/userAuthContext";
import UserContext from "../../../../context/user/user/userContext";

const MedicineItem = ({ medicine }) => {
  const userAuthContext = React.useContext(UserAuthContext);
  const userContext = React.useContext(UserContext);
  const { addCartItems } = userContext;
  //   const { addCartItems } = userAuthContext;
  var parseData;
  const storeData = localStorage.getItem("user");
  if (storeData) {
    parseData = JSON.parse(storeData);
    console.log(parseData);
  }
  console.log(medicine);

  const addCart = () => {
    addCartItems(medicine.id, storeData);
  };

  return (
    medicine.isEnabled && (
      <div className="medicine-item">
        <h2>{medicine.name}</h2>

        <p className="item-seller">{medicine.seller}</p>
        <p className="item-seller">{medicine.productDescription}</p>
        <p className="medicine-price">
          $ {medicine.price - (medicine.price * medicine.offers) / 100}{" "}
          <span className="item-price-mrp">$ {medicine.price}</span>
        </p>
        <p className="get-offers">GET {medicine.offers}% off</p>
        <button onClick={addCart}>Add to Cart</button>
      </div>
    )
  );
};

export default MedicineItem;
