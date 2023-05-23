import React from "react";
import "../../../../style/pages/medicine.css";
import "../../../../style/pages/confirmation.css";

const ConfirmationItem = ({ item }) => {
  const { medicine } = item;
  const { id, name, seller, price, productDescription, offers } = medicine;
  return (
    <li className="medicine-price">               
      <span className="product-name">{name}</span>
      <span className="product-price">            
        $ {price - (price * offers) / 100}.00     
      </span>                                     
    </li>                                                 
  );
};

export default ConfirmationItem;
