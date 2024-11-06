import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo.jsx";
import css from './CatalogPage.module.css'
import Camper from "../../components/Camper/Camper.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredVehicles } from "../../apiServise/apiServise.js";
import { setBodyTypeFilter, setLocationFilter, toggleACFilter, toggleBathroomFilter, toggleGasFilter, toggleKitchenFilter, toggleMicrowaveFilter, togglePetrolFilter, toggleRadioFilter, toggleRefrigeratorFilter, toggleTransmissionFilter, toggleTVFilter, toggleWaterFilter } from "../../redux/filtersSlice.js";
import { selectHasACFilter, selectHasBathroomFilter, selectHasGasFilter, selectHasKitchenFilter, selectHasMicrowaveFilter, selectHasPetrolFilter, selectHasRadioFilter, selectHasRefrigeratorFilter, selectHasTransmissionFilter, selectHasTVFilter, selectHasWaterFilter } from "../../redux/selectors.js";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox.jsx";

function CatalogPage() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const hasAC = useSelector(selectHasACFilter);
   const hasTransmission = useSelector(selectHasTransmissionFilter);
    const hasKitchen = useSelector(selectHasKitchenFilter);
    const hasTV = useSelector(selectHasTVFilter);
    const hasBathroom = useSelector(selectHasBathroomFilter);
    const hasRadio = useSelector(selectHasRadioFilter);
    const hasRefrigerator = useSelector(selectHasRefrigeratorFilter);
    const hasMicrowave = useSelector(selectHasMicrowaveFilter);
    const hasGas = useSelector(selectHasGasFilter);
    const hasPetrol = useSelector(selectHasPetrolFilter);
  const hasWater = useSelector(selectHasWaterFilter);


  const handleSearch = () => {
    dispatch(fetchFilteredVehicles(filters)); // Запуск запиту з поточними фільтрами
  };

  const bodyType = useSelector((state) => state.filters.bodyType);
  
    const handleBodyTypeChange = (type) => {
      dispatch(setBodyTypeFilter(type));
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
      <p>Location</p>
      <div className={css.inputWrapper}>
        <input
          className={css.input}
          type="text"
          onChange={(e) => dispatch(setLocationFilter(e.target.value))}
        />
        <svg>
          <use href={""}></use>
        </svg>
      </div>
      <p>Filters</p>
      <p>Vehicle equipment</p>
      <ul>
        <li>
          <CustomCheckbox
            checked={hasAC}
            onChange={() => dispatch(toggleACFilter())}
            label="AC"
          />
        </li>
        <li>
          <CustomCheckbox
            checked={hasTransmission}
            onChange={() => dispatch(toggleTransmissionFilter())}
            label="Automatic"
          />
        </li>
        <li>
          <CustomCheckbox
            checked={hasKitchen}
            onChange={() => dispatch(toggleKitchenFilter())}
            label="Kitchen"
          />
        </li>
        <li>
          <CustomCheckbox
            checked={hasTV}
            onChange={() => dispatch(toggleTVFilter())}
            label="TV"
          />
        </li>
        <li>
          <CustomCheckbox
            checked={hasBathroom}
            onChange={() => dispatch(toggleBathroomFilter())}
            label="Bathroom"
          />
        </li>
        <li>
          <CustomCheckbox
            checked={hasRadio}
            onChange={() => dispatch(toggleRadioFilter())}
            label="Radio"
          />
        </li>
        <li>
          <CustomCheckbox
            checked={hasRefrigerator}
            onChange={() => dispatch(toggleRefrigeratorFilter())}
            label="Refrigerator"
          />
        </li>
        <li>
          <CustomCheckbox
            checked={hasMicrowave}
            onChange={() => dispatch(toggleMicrowaveFilter())}
            label="Microwave"
          />
        </li>
        <li>
          <CustomCheckbox
            checked={hasGas}
            onChange={() => dispatch(toggleGasFilter())}
            label="Gas"
          />
        </li>
        <li>
          <CustomCheckbox
            checked={hasPetrol}
            onChange={() => dispatch(togglePetrolFilter())}
            label="Petrol"
          />
        </li>
        <li>
          <CustomCheckbox
            checked={hasWater}
            onChange={() => dispatch(toggleWaterFilter())}
            label="Water"
          />
        </li>
      </ul>
      <p>Vehicle type</p>
      <ul>
        <li>
          <button
            className={bodyType === "Van" ? "selected" : ""}
            onClick={() => handleBodyTypeChange("Van")}
          >
            <svg>
              <use href={""}></use>
            </svg>
            Van
          </button>
        </li>
        <li>
          <button
            className={bodyType === "Fully Integrated" ? "selected" : ""}
            onClick={() => handleBodyTypeChange("Fully Integrated")}
          >
            <svg>
              <use href={""}></use>
            </svg>
            Fully Integrated
          </button>
        </li>
        <li>
          <button
            className={bodyType === "Alcove" ? "selected" : ""}
            onClick={() => handleBodyTypeChange("Alcove")}
          >
            <svg>
              <use href={""}></use>
            </svg>
          </button>
        </li>
      </ul>
      <button onClick={handleSearch}>Search</button>
      <Camper />
    </div>
  );
}

export default CatalogPage