import React from "react";
import AdminContext from "../../../context/admin/admin/adminContext";
import MedicineItem from "./MedicineItems";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Fragment } from "react";

const Medicines = () => {
  const admincontext = React.useContext(AdminContext);

  const { medicines, filtered, getMedicine } = admincontext;

  React.useEffect(() => {
    console.log(medicines.data);
    getMedicine();
    // eslint-disable-next-line
  }, []);

  console.log(medicines);
  if (medicines == null && medicines.length === 0 && filtered === null) {
    return <h4>Please add a Medicine</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((medicine) => (
              <CSSTransition key={medicine.id} timeout={500} classNames="item">
                <MedicineItem key={medicine.id} medicine={medicine} />
              </CSSTransition>
            ))
          : medicines.data &&
            medicines.data.map((medicine) => (
              <CSSTransition key={medicine.id} timeout={500} classNames="item">
                <MedicineItem key={medicine.id} medicine={medicine} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Medicines;
