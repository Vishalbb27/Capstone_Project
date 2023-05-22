import React from "react";
import AdminContext from "../../../context/admin/admin/adminContext";
import "bootstrap/dist/css/bootstrap.css";

const MedicineForm = () => {
  const adminContext = React.useContext(AdminContext);

  const { current, addMedicine, clearCurrent, updateMedicine } = adminContext;

  React.useEffect(() => {
    if (current !== null) {
      setmedicine(current);
    } else {
      setmedicine({
        name: "",
        price: "",
        seller: "",
        productDescription: "",
        offers: 0,
        isEnabled: true,
      });
    }
  }, [adminContext, current]);
  const [medicine, setmedicine] = React.useState({
    name: "",
    price: "",
    seller: "",
    productDescription: "",
    offers: 0,
    isEnabled: true,
  });

  const clearAll = () => {
    clearCurrent();
  };

  const { name, price, seller, isEnabled, offers, productDescription } =
    medicine;

  const onChange = (e) =>
    setmedicine({ ...medicine, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addMedicine(medicine);
      setmedicine({
        name: "",
        price: "",
        seller: "",
        productDescription: "",
        offers: 0,
        isEnabled: true,
      });
    } else {
      updateMedicine(medicine);
      clearAll();
    }
  };

  return (
    <form className="form-group " onSubmit={onSubmit}>
      <h2 className="text-primary text-align-center">
        {current ? "Edit medicine" : "Add medicine"}
      </h2>
      <input
        className="form-control my-2"
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className="form-control my-2"
        type="price"
        placeholder="price"
        name="price"
        value={price}
        onChange={onChange}
      />
      <input
        className="form-control my-2"
        type="text"
        placeholder="seller"
        name="seller"
        value={seller}
        onChange={onChange}
      />
      <input
        className="form-control my-2"
        type="text"
        placeholder="productDescription"
        name="productDescription"
        value={productDescription}
        onChange={onChange}
      />
      <input
        className="form-control my-2"
        type="number"
        placeholder="offers"
        name="offers"
        value={offers}
        onChange={onChange}
      />
      <h5 className="text-sm">Medicine Type</h5>
      <input
        type="radio"
        name="isEnabled"
        value="true"
        checked={isEnabled === "true"}
        onChange={onChange}
      />{" "}
      Enable{" "}
      <input
        type="radio"
        name="isEnabled"
        value="false"
        checked={isEnabled === "false"}
        onChange={onChange}
      />{" "}
      Disable
      <div>
        <input
          type="submit"
          value={current ? "Update medicine" : "Add medicine"}
          className="btn btn-primary btn-block form-control my-2"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default MedicineForm;
