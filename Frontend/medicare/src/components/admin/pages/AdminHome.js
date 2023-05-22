import React from "react";
import Navbar from "../layout/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import MedicineForm from "../medicine/MedicineForm";
import MedincineFilter from "../medicine/MedicineFilter";
import Medicines from "../medicine/Medicines";
import AuthContext from "../../../context/admin/auth/authContext";
import AdminContext from "../../../context/admin/admin/adminContext";
const AdminHome = () => {
  const context = React.useContext(AdminContext);
  const adminContext = React.useContext(AuthContext);
  const { isAuthenticated, token } = adminContext;
  const { getMedicine } = context;
  var parseData=null;
  React.useEffect(() => {
    // getMedicine();
    console.log("inside");

    // eslint-disable-next-line
  }, []);
  const storeData = localStorage.getItem("admin");
  if (storeData) {
    parseData = JSON.parse(storeData);
    console.log(parseData);
  }
  console.log(localStorage.getItem("admin"));

  return (
    parseData && (
      <div className="container pt-0">
        <Navbar name = {parseData.name} />
        <div className="row">
          <div className="col-md-6 pt-4">
            <MedicineForm />
          </div>
          <div className="col-md-6">
            <MedincineFilter />
            <Medicines />
          </div>
        </div>
      </div>
    )
  );
};

export default AdminHome;
