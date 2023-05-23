import React from "react";
import UserContext from "../../../../context/user/user/userContext";

const CartItem = ({ item, user }) => {
  const userContext = React.useContext(UserContext);
  const { deleteCartItems } = userContext;
  console.log(item);
  const { medicine } = item;
  const { id, name, seller, price, productDescription, offers } = medicine;
  console.log(item.id);
  const handleRemove = () => {
    deleteCartItems(item.id, user);
  };

  return (
    <li className="cart-item">
      <div className="item-cart">
        <h3 className="item-name">{name}</h3>
        <p className="item-seller">{seller}</p>
        <p className="item-description">{productDescription}</p>
        <p className="item-offerprice">${price - (offers * price) / 100}</p>

        <p className="item-price">
          <span className="item-price-mrp">$ {price} </span>
          <span className="save">
            &nbsp;&nbsp;Save ${(offers * price) / 100}
          </span>
        </p>
      </div>
      <button className="item-delete-button" onClick={handleRemove}>
        Delete
      </button>
    </li>
  );
};

export default CartItem;
