// Action Types
export const actionTypes = {
  GET_BRANCHES_BY_BRANDS: "GET_BRANCHES_BY_BRANDS",
  GET_BRANCHES_BY_BRANDS_SUCCESS: "GET_BRANCHES_BY_BRANDS_SUCCESS",
  GET_BRANCHES_BY_BRANDS_FAILED: "GET_BRANCHES_BY_BRANDS_FAILED"
};

// Reducer
const initialState = {
  data: null,
  data_all: [],
  meta: null,
  isLoading: false,
  errors: null
};

export const actionCreators = {
  getBranchesByBrands: params => ({
    type: actionTypes.GET_BRANCHES_BY_BRANDS,
    ...params
  })
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BRANCHES_BY_BRANDS:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_BRANCHES_BY_BRANDS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data_all: action.payload.data
      });

    case actionTypes.GET_BRANCHES_BY_BRANDS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors
      });

    default:
      return state;
  }
};
