import React from "react";
import UserContext from "../../../../context/user/user/userContext";
import "../../../../style/pages/search.css";
const MedincineFilter = () => {
  const adminContext = React.useContext(UserContext);
  const {
    filterMedicines,
    clearFilter,
    filtered,
    sortOption,
    sortMedicines,
    medicines,
  } = adminContext;
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

  const handleSortOptionChange = (event) => {
    const selectedOption = event.target.value;
    console.log(medicines);
    sortMedicines(selectedOption, medicines);
  };
  return (
    <div className="filter">
      <form className="search-bar">
        <div className="select">
          <label htmlFor="sorting" className="sortby">
            Filter
          </label>
          <select
            id="sorting"
            value={sortOption}
            onChange={handleSortOptionChange}
          >
            <option value="nameAsc">Seller</option>
          </select>
        </div>
        <div>
          <input
            className="search-input"
            type="text"
            ref={text}
            placeholder="Search Medicines..."
            onChange={onChange}
          />
        </div>
        <div className="select">
          <label htmlFor="sorting" className="sortby">
            Sort By
          </label>
          <select
            id="sorting"
            value={sortOption}
            onChange={handleSortOptionChange}
          >
            <option value="default"></option>
            <option value="priceAsc">Price -- Low to High</option>
            <option value="priceDesc">Price -- High to Low</option>
            <option value="nameAsc">Name (A-Z)</option>
            <option value="nameDesc">Name (Z-A)</option>
            <option value="offers">Offers</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default MedincineFilter;
