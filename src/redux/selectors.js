export const selectFilters = (state) => state.filters;

export const selectLocationFilter = (state) => state.filters.location;

export const selectBodyTypeFilter = (state) => state.filters.bodyType;

export const selectHasACFilter = (state) => state.filters.AC;

export const selectHasKitchenFilter = (state) => state.filters.kitchen;

export const selectHasTVFilter = (state) => state.filters.TV;

export const selectHasBathroomFilter = (state) => state.filters.bathroom;

export const selectHasRadioFilter = (state) => state.filters.radio;

export const selectHasRefrigeratorFilter = (state) => state.filters.refrigerator;

export const selectHasMicrowaveFilter = (state) => state.filters.microwave;

export const selectHasGasFilter = (state) => state.filters.gas;

export const selectHasPetrolFilter = (state) => state.filters.engine;

export const selectHasWaterFilter = (state) => state.filters.water;

export const selectCampers = (state) => state.campers.details;

export const selectCampersLoading = (state) => state.campers.loading;

export const selectCampersError = (state) => state.campers.error;

export const selectHasTransmissionFilter = (state) =>
  state.filters.transmission;

// Селектор для отримання відфільтрованих кемперів
export const selectFilteredCampers = (state) => {
  const {
    location,
    bodyType,
    AC,
    kitchen,
    TV,
    bathroom,
    radio,
    refrigerator,
    microwave,
    gas,
    engine,
    water,
    transmission,
  } = state.filters;
  const campers = state.campers.details || [];

  return campers.filter((camper) => {
    const matchesLocation = location ? camper.location === location : true;
    const matchesBodyType = bodyType ? camper.bodyType === bodyType : true;
    const matchesAC = AC ? camper.AC === true : true;
    const matchesKitchen = kitchen ? camper.kitchen === true : true;
    const matchesTV = TV ? camper.TV === true : true;
    const matchesBathroom = bathroom ? camper.bathroom === true : true;
    const matchesRadio = radio ? camper.radio === true : true;
    const matchesRefrigerator = refrigerator
      ? camper.refrigerator === true
      : true;
    const matchesMicrowave = microwave ? camper.microwave === true : true;
    const matchesGas = gas ? camper.gas === true : true;
    const matchesPetrol = engine === "petrol" ? camper.engine === "petrol" : true;
    const matchesWater = water ? camper.water === true : true;
    const matchesTransmission =
      transmission === "automatic" ? camper.transmission === "automatic" : true;

    return (
      matchesLocation &&
      matchesBodyType &&
      matchesAC &&
      matchesKitchen &&
      matchesTV &&
      matchesBathroom &&
      matchesRadio &&
      matchesRefrigerator &&
      matchesMicrowave &&
      matchesGas &&
      matchesPetrol &&
      matchesWater &&
      matchesTransmission
    );
  });
};
