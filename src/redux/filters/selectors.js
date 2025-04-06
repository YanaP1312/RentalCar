//   brand: null,
//   price: null,
//   mileageFrom: null,
//     mileageTo: null,
//     isLoading: false,
//   isError: false,

export const selectBrand = (state) => state.filters.brand;
export const selectPrice = (state) => state.filters.price;
export const selectMileageFrom = (state) => state.filters.mileageFrom;
export const selectMileageTo = (state) => state.filters.mileageTo;
export const selectIsLoading = (state) => state.filters.isLoading;
export const selectIsError = (state) => state.filters.isError;
