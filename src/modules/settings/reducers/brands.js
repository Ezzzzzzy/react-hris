// Action Types
export const actionTypes = {
  GET_ALL_BRANDS: "GET_ALL_BRANDS",
  GET_ALL_BRANDS_SUCCESS: "GET_ALL_BRANDS_SUCCESS",
  GET_ALL_BRANDS_FAILED: "GET_ALL_BRANDS_FAILED"
};

// Reducer
const initialState = {
  data: null,
  meta: null,
  isLoading: false,
  errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_BRANDS:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_ALL_BRANDS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data
      });

    case actionTypes.GET_ALL_BRANDS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        brands: null
      });

    default:
      return state;
  }
};

export const actionCreators = {
  allBrand: () => ({
    type: actionTypes.GET_ALL_BRANDS
  })
};
