
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocationFilter,

  toggleACFilter,
  toggleBathroomFilter,
  toggleGasFilter,
  toggleKitchenFilter,
  toggleMicrowaveFilter,
  togglePetrolFilter,
  toggleRadioFilter,
  toggleRefrigeratorFilter,
  setTransmissionFilter,
  toggleTVFilter,
  toggleWaterFilter,
/*   resetFilters, */
  setFormTypeFilter,
 
} from "../../redux/filtersSlice";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox";
import Logo from "../../components/Logo/Logo";
import css from "./CatalogPage.module.css";
import { fetchFilteredVehicles } from "../../apiServise/apiServise.js";
import CamperList from "../../components/CamperList/CamperList.jsx";
import { useState } from "react";

function CatalogPage() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
    const [showCampers, setShowCampers] = useState(false);

   
    

  const {
    isLoading,
    error,
    items: filteredCampers,
    location,
    form,
    AC,
    transmission,
    kitchen,
    TV,
    bathroom,
    radio,
    refrigerator,
    microwave,
    gas,
    engine,
    water,
  } = filters;

 
 
 const handleSearch = () => {
   dispatch(fetchFilteredVehicles(filters)).then(() => {
     setShowCampers(true); 
     
   });
 };
  


  
  return (
    <div>
      <div className={css.header}>
        <Logo />
        <div className={css.navContainer}>
          <NavLink className={css.nav} to="/">
            Home
          </NavLink>
          <NavLink className={css.nav} to="/catalog">
            Catalog
          </NavLink>
        </div>
      </div>
      <div className={css.container}>
        <div className={css.buttonContainer}>
          <p className={css.location}>Location</p>
          <div className={css.inputWrapper}>
            <input
              className={css.input}
              type="text"
              value={location}
              onChange={(e) => dispatch(setLocationFilter(e.target.value))}
            />
          </div>
          <div className={css.textContainer}>
            <p className={css.filters}>Filters</p>
            <p className={css.text}>Vehicle equipment</p>
          </div>
          <ul className={css.checkList}>
            <li>
              <CustomCheckbox
                checked={AC}
                onChange={() => dispatch(toggleACFilter())}
                label="AC"
              />
            </li>
            <li>
              <CustomCheckbox
                checked={transmission === "automatic"}
                onChange={() => dispatch(setTransmissionFilter("automatic"))}
                label="Automatic"
              />
            </li>
            <li>
              <CustomCheckbox
                checked={kitchen}
                onChange={() => dispatch(toggleKitchenFilter())}
                label="Kitchen"
              />
            </li>
            <li>
              <CustomCheckbox
                checked={TV}
                onChange={() => dispatch(toggleTVFilter())}
                label="TV"
              />
            </li>
            <li>
              <CustomCheckbox
                checked={bathroom}
                onChange={() => dispatch(toggleBathroomFilter())}
                label="Bathroom"
              />
            </li>
            <li>
              <CustomCheckbox
                checked={radio}
                onChange={() => dispatch(toggleRadioFilter())}
                label="Radio"
              />
            </li>
            <li>
              <CustomCheckbox
                checked={refrigerator}
                onChange={() => dispatch(toggleRefrigeratorFilter())}
                label="Refrigerator"
              />
            </li>
            <li>
              <CustomCheckbox
                checked={microwave}
                onChange={() => dispatch(toggleMicrowaveFilter())}
                label="Microwave"
              />
            </li>
            <li>
              <CustomCheckbox
                checked={gas}
                onChange={() => dispatch(toggleGasFilter())}
                label="Gas"
              />
            </li>
            <li>
              <CustomCheckbox
                checked={engine === "petrol"}
                onChange={() => dispatch(togglePetrolFilter("petrol"))}
                label="Petrol"
              />
            </li>
            <li>
              <CustomCheckbox
                checked={water}
                onChange={() => dispatch(toggleWaterFilter())}
                label="Water"
              />
            </li>
          </ul>
          <div className={css.textContainer}>
            <p className={css.text}>Vehicle type</p>
          </div>
          <ul className={css.checkList}>
            <li>
              <CustomCheckbox
                checked={form === "wan"}
                onChange={() => dispatch(setFormTypeFilter("wan"))}
                label="Wan"
              />
            </li>
            <li>
              <CustomCheckbox
                checked={form === "fullyIntegrated"}
                onChange={() => dispatch(setFormTypeFilter("fullyIntegrated"))}
                label="Fully Integrated"
              />
            </li>
            <li>
              <CustomCheckbox
                checked={form === "alcove"}
                onChange={() => dispatch(setFormTypeFilter("alcove"))}
                label="Alcove"
              />
            </li>
          </ul>

          <button className={css.search} onClick={handleSearch}>Search</button>
        </div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {showCampers && (
          <div className={css.campersList}>
            <CamperList campers={filteredCampers} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CatalogPage;
