
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

  setFormTypeFilter,
  clearFilteredVehicles,
 
} from "../../redux/filtersSlice";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox";
import Logo from "../../components/Logo/Logo";
import css from "./CatalogPage.module.css";
import { fetchFilteredVehicles } from "../../apiServise/apiServise.js";
import CamperList from "../../components/CamperList/CamperList.jsx";
import { useState } from "react";
import sprite from '../../../public/svg/icons.svg'

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

const prepareQueryParams = (filters) => {
  return Object.fromEntries(
    Object.entries(filters).filter(
      ([key, value]) =>
        value !== null &&
        value !== false &&
        value !== "" &&
        key !== "items" &&
        key !== "filteredCampers" &&
        key !== "error"
    )
  );
};
 
 
  const handleSearch = () => {
   const sanitizedFilters = prepareQueryParams(filters);
  dispatch(clearFilteredVehicles()); 
  setShowCampers(false); 
 dispatch(fetchFilteredVehicles(sanitizedFilters)).then(() => {
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
            <svg className={css.locationSvg}>
              <use href={`${sprite}#icon-Map-1`}></use>
            </svg>
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
                icon={`${sprite}#icon-AC`}
              />
            </li>
            <li>
              <CustomCheckbox
                checked={transmission === "automatic"}
                onChange={() => dispatch(setTransmissionFilter("automatic"))}
                label="Automatic"
                icon={`${sprite}#icon-automat`}
              />
            </li>
            <li>
              <CustomCheckbox
                checked={kitchen}
                onChange={() => dispatch(toggleKitchenFilter())}
                label="Kitchen"
                icon={`${sprite}#icon-coffy`}
              />
            </li>
            <li>
              <CustomCheckbox
                checked={TV}
                onChange={() => dispatch(toggleTVFilter())}
                label="TV"
                icon={`${sprite}#icon-TV`}
              />
            </li>
            <li>
              <CustomCheckbox
                checked={bathroom}
                onChange={() => dispatch(toggleBathroomFilter())}
                label="Bathroom"
                icon={`${sprite}#icon-shower`}
              />
            </li>
            <li>
              <CustomCheckbox
                checked={radio}
                onChange={() => dispatch(toggleRadioFilter())}
                label="Radio"
                icon={`${sprite}#icon-ui-radios`}
              />
            </li>
            <li>
              <CustomCheckbox
                checked={refrigerator}
                onChange={() => dispatch(toggleRefrigeratorFilter())}
                label="Refrigerator"
                icon={`${sprite}#icon-refrig`}
              />
            </li>
            <li>
              <CustomCheckbox
                checked={microwave}
                onChange={() => dispatch(toggleMicrowaveFilter())}
                label="Microwave"
                icon={`${sprite}#icon-lucide_microwave`}
              />
            </li>
            <li>
              <CustomCheckbox
                checked={gas}
                onChange={() => dispatch(toggleGasFilter())}
                label="Gas"
                icon={`${sprite}#icon-hugeicons_gas-stove`}
              />
            </li>
            <li>
              <CustomCheckbox
                checked={engine === "petrol"}
                onChange={() => dispatch(togglePetrolFilter("petrol"))}
                label="Petrol"
                icon={`${sprite}#icon-fuel-pump-1`}
              />
            </li>
            <li>
              <CustomCheckbox
                checked={water}
                onChange={() => dispatch(toggleWaterFilter())}
                label="Water"
                icon={`${sprite}#icon-ion_water-outline`}
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
                icon={`${sprite}#icon-van`}
              />
            </li>
            <li>
              <CustomCheckbox
                checked={form === "fullyIntegrated"}
                onChange={() => dispatch(setFormTypeFilter("fullyIntegrated"))}
                label="Fully Integrated"
                icon={`${sprite}#icon-fully`}
              />
            </li>
            <li>
              <CustomCheckbox
                checked={form === "alcove"}
                onChange={() => dispatch(setFormTypeFilter("alcove"))}
                label="Alcove"
                icon={`${sprite}#icon-alcove`}
              />
            </li>
          </ul>

          <button className={css.search} onClick={handleSearch}>
            Search
          </button>
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
