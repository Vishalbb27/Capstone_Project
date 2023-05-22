import React from "react";
import AdminContext from "../../../context/admin/admin/adminContext";
import "../../../style/pages/search.css"
const MedincinFilter = () => {
    const adminContext = React.useContext(AdminContext);
    const { filterMedicines, clearFilter, filtered } = adminContext;
    const text = React.useRef("");
  
    React.useEffect(() => {
      if (filtered === null) {
        text.current.value = "";
      }
    }, [filtered]);
  
    const onChange = (e) => {
      if (text.current.value !== "") {
        filterMedicines(e.target.value);
      } else {
        clearFilter();
      }
    };
    return (
      <div className="filter">
      <form className="search-bar">
        <input
        className="search-input"
          type="text"
          ref={text}
          placeholder="Search Medicines..."
          onChange={onChange}
        />
      </form></div>
    );
}

export default MedincinFilter;