import React from "react";
import MedicineItem from "./MedicineItem";
import "../../../../style/pages/medicine.css";
import UserContext from "../../../../context/user/user/userContext";

const MedicineList = () => {
  const userAuthContext = React.useContext(UserContext);
  const { medicines, getMedicine, filtered,sorted,sort } = userAuthContext;

  React.useEffect(() => {
    console.log(medicines.data);
    getMedicine();
    // eslint-disable-next-line
  }, []);

  console.log(medicines);

  return (
    <div className="medicine-list">
      {filtered != null
        ? filtered.map((medicine) => (
            <MedicineItem key={medicine.id} medicine={medicine} />
          ))
        : medicines.data &&
          medicines.data.map((medicine) => (
            <MedicineItem key={medicine.id} medicine={medicine} />
          ))}
    </div>
  );
};

export default MedicineList;
