export const selectFilters = (state) => state.filters;

export const selectLocationFilter = (state) => state.filters.location;

export const selectBodyTypeFilter = (state) => state.filters.bodyType;

export const selectHasACFilter = (state) => state.filters.hasAC;

export const selectHasKitchenFilter = (state) => state.filters.hasKitchen;

export const selectHasTVFilter = (state) => state.filters.hasTV;

export const selectHasBathroomFilter = (state) => state.filters.hasBathroom;

export const selectHasRadioFilter = (state) => state.filters.hasRadio;

export const selectHasRefrigeratorFilter = (state) =>
  state.filters.hasRefrigerator;

export const selectHasMicrowaveFilter = (state) => state.filters.hasMicrowave;

export const selectHasGasFilter = (state) => state.filters.hasGas;

export const selectHasPetrolFilter = (state) => state.filters.hasPetrol;

export const selectHasWaterFilter = (state) => state.filters.hasWater;

export const selectCampers = (state) => state.campers.details;

export const selectCampersLoading = (state) => state.campers.loading;

export const selectCampersError = (state) => state.campers.error;

export const selectHasTransmissionFilter = (state) =>
  state.filters.hasTransmission;

// Селектор для отримання відфільтрованих кемперів
export const selectFilteredCampers = (state) => {
  const {
    location,
    bodyType,
    hasAC,
    hasKitchen,
    hasTV,
    hasBathroom,
    hasRadio,
    hasRefrigerator,
    hasMicrowave,
    hasGas,
    hasPetrol,
    hasWater,
  } = state.filters;
  const campers = state.campers.details || [];

  return campers.filter((camper) => {
    const matchesLocation = location ? camper.location === location : true;
    const matchesBodyType = bodyType ? camper.bodyType === bodyType : true;
    const matchesAC = hasAC ? camper.hasAC === true : true;
    const matchesKitchen = hasKitchen ? camper.hasKitchen === true : true;
    const matchesTV = hasTV ? camper.hasTV === true : true;
    const matchesBathroom = hasBathroom ? camper.hasBathroom === true : true;
    const matchesRadio = hasRadio ? camper.hasRadio === true : true;
    const matchesRefrigerator = hasRefrigerator
      ? camper.hasRefrigerator === true
      : true;
    const matchesMicrowave = hasMicrowave ? camper.hasMicrowave === true : true;
    const matchesGas = hasGas ? camper.hasGas === true : true;
    const matchesPetrol = hasPetrol ? camper.hasPetrol === true : true;
    const matchesWater = hasWater ? camper.hasWater === true : true;

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
      matchesWater
    );
  });
};
