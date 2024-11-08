

export const selectFilters = (state) => state.filters;

export const selectLocationFilter = (state) => state.filters.location;

export const selectFormTypeFilter = (state) => state.filters.form;

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


export const selectFilteredCampers = (state) => state.filters.filteredCampers;


