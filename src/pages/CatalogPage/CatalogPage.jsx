
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocationFilter,
  setBodyTypeFilter,
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
  resetFilters,
 
} from "../../redux/filtersSlice";
import Camper from "../../components/Camper/Camper";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox";
import Logo from "../../components/Logo/Logo";
import css from "./CatalogPage.module.css";
import { fetchFilteredVehicles } from "../../apiServise/apiServise.js";

function CatalogPage() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const {
    isLoading,
    error,
    items: filteredCampers,
    location,
    bodyType,
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
     dispatch(resetFilters()); // Скидаємо фільтри після пошуку
   });
 };

  return (
    <div>
      {/* Header and Navigation */}
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
      <p>Location</p>
      <div className={css.inputWrapper}>
        <input
          className={css.input}
          type="text"
          value={location}
          onChange={(e) => dispatch(setLocationFilter(e.target.value))}
        />
      </div>

      <p>Filters</p>
      <p>Vehicle equipment</p>
      <ul>
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
      <p>Vehicle type</p>
      <ul>
        <li>
          <button
            className={bodyType === "Van" ? css.selected : ""}
            onClick={() => dispatch(setBodyTypeFilter("Van"))}
          >
            Van
          </button>
        </li>
        <li>
          <button
            className={bodyType === "Fully Integrated" ? css.selected : ""}
            onClick={() => dispatch(setBodyTypeFilter("Fully Integrated"))}
          >
            Fully Integrated
          </button>
        </li>
        <li>
          <button
            className={bodyType === "Alcove" ? css.selected : ""}
            onClick={() => dispatch(setBodyTypeFilter("Alcove"))}
          >
            Alcove
          </button>
        </li>
      </ul>
      <button onClick={handleSearch}>Search</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className={css.campersList}>
        {filteredCampers.map((camper) => (
          <Camper key={camper.id} data={camper} />
        ))}
      </div>
      <button>Load More</button>
    </div>
  );
}

export default CatalogPage;
