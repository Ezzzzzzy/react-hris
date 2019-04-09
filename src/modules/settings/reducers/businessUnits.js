// Action Types
export const actionTypes = {
  GET_ALL_BUSINESS_UNITS: "GET_ALL_BUSINESS_UNITS",
  GET_ALL_BUSINESS_UNITS_SUCCESS: "GET_ALL_BUSINESS_UNITS_SUCCESS",
  GET_ALL_BUSINESS_UNITS_FAILED: "GET_ALL_BUSINESS_UNITS_FAILED"
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
    case actionTypes.GET_ALL_BUSINESS_UNITS:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_ALL_BUSINESS_UNITS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data
      });

    case actionTypes.GET_ALL_BUSINESS_UNITS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors
      });

    default:
      return state;
  }
};

export const actionCreators = {
  allBu: () => ({
    type: actionTypes.GET_ALL_BUSINESS_UNITS
  })
};
