export const selectFilters = (state) => state.filters;

export const selectLocationFilter = (state) => state.filters.location;

export const selectBodyTypeFilter = (state) => state.filters.bodyType;

export const selectHasACFilter = (state) => state.filters.hasAC;

export const selectHasKitchenFilter = (state) => state.filters.hasKitchen;

export const selectCampers = (state) => state.campers.details; 

export const selectCampersLoading = (state) => state.campers.loading;

export const selectCampersError = (state) => state.campers.error;


export const selectFilteredCampers = (state) => {
  const { location, bodyType, hasAC, hasKitchen } = state.filters;
  const campers = state.campers.details || []; 

  return campers.filter((camper) => {
    const matchesLocation = location ? camper.location === location : true;
    const matchesBodyType = bodyType ? camper.bodyType === bodyType : true;
    const matchesAC = hasAC ? camper.hasAC === true : true;
    const matchesKitchen = hasKitchen ? camper.hasKitchen === true : true;

    return matchesLocation && matchesBodyType && matchesAC && matchesKitchen;
  });
};
