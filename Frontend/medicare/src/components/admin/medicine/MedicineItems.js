import React from "react";
import AdminContext from "../../../context/admin/admin/adminContext";
import "bootstrap/dist/css/bootstrap.css";

const MedicineItem = (medicine) => {
  const adminContext = React.useContext(AdminContext);
  const { deleteMedicine, setCurrent, clearCurrent } = adminContext;

  const onDelete = () => {
    deleteMedicine(medicine.medicine.id);
    clearCurrent();
  };
  console.log(medicine);

  return (
    <div className="card bg-light mt-2 p-2">
      <h3 className="text-primary text-left">
        {medicine.medicine.name}{" "}
        {medicine.medicine.isEnabled ? (
          <span style={{ float: "right" }} className="text-success">
            Enabled
          </span>
        ) : (
          <span style={{ float: "right" }} className="text-danger">
            Disable
          </span>
        )}
      </h3>
      <ul className="list">
        {medicine.medicine.price && (
          <li className="font-weight-bold list-group-item">Price : $ {medicine.medicine.price}</li>
        )}
        {medicine.medicine.offers && (
          <li className="font-weight-bold list-group-item">Offer : {medicine.medicine.offers}%</li>
        )}
        {medicine.medicine.seller && (
          <li className="font-weight-bold list-group-item">Seller : {medicine.medicine.seller}</li>
        )}
        {medicine.medicine.productDescription && (
          <li className="font-weight-bold list-group-item">
            Description : {medicine.medicine.productDescription}
          </li>
        )}
        
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm m-2"
          onClick={() => setCurrent(medicine.medicine)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default MedicineItem;
