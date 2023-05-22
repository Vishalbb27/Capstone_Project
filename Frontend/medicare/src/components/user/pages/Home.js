import React from "react";
import Navbar from "../layout/Navbar";
import MedicineList from "../user/Medicine/MedicineList";
import UserContext from "../../../context/user/user/userContext";
import Cart from "../user/Cart/Cart";
import MedincineFilter from "../user/Filter/MedicineFilter";

const Home = () => {
  var parseData;
  const userContext = React.useContext(UserContext);
  const { getCartItems, cartItems, home, cart, payment } = userContext;
  const storeData = localStorage.getItem("user");
  if (storeData) {
    parseData = JSON.parse(storeData);
    console.log(parseData);
  }
  React.useEffect(() => {
    getCartItems(parseData);
    localStorage.removeItem("shipping");
    localStorage.removeItem("payment")
  }, []);

  console.log(home);

  return (
    parseData && (
      <div>
        <Navbar name={parseData.name} />
        <MedincineFilter />
        <div>{<MedicineList />}</div>
      </div>
    )
  );
};

export default Home;
