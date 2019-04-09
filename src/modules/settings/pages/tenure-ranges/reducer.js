// Action Types
export const actionTypes = {
  GET_ALL_TENURE_RANGES: "GET_ALL_TENURE_RANGES",
  GET_ALL_TENURE_RANGES_SUCCESS: "GET_ALL_TENURE_RANGES_SUCCESS",
  GET_ALL_TENURE_RANGES_FAILED: "GET_ALL_TENURE_RANGES_FAILED",
  GET_TENURE_RANGES: "GET_TENURE_RANGES",
  GET_TENURE_RANGES_SUCCESS: "GET_TENURE_RANGES_SUCCESS",
  GET_TENURE_RANGES_FAILED: "GET_TENURE_RANGES_FAILED",
  CREATE_TENURE_RANGES: "CREATE_TENURE_RANGES",
  CREATE_TENURE_RANGES_SUCCESS: "CREATE_TENURE_RANGES_SUCCESS",
  CREATE_TENURE_RANGES_FAILED: "CREATE_TENURE_RANGES_FAILED",
  UPDATE_TENURE_RANGES: "UPDATE_TENURE_RANGES",
  UPDATE_TENURE_RANGES_SUCCESS: "UPDATE_TENURE_RANGES_SUCCESS",
  UPDATE_TENURE_RANGES_FAILED: "UPDATE_TENURE_RANGES_FAILED",
  DELETE_TENURE_RANGES: "DELETE_TENURE_RANGES",
  DELETE_TENURE_RANGES_SUCCESS: "DELETE_TENURE_RANGES_SUCCESS",
  DELETE_TENURE_RANGES_FAILED: "DELETE_TENURE_RANGES_FAILED"
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
    case actionTypes.UPDATE_TENURE_RANGES:
    case actionTypes.CREATE_TENURE_RANGES:
    case actionTypes.DELETE_TENURE_RANGES:
    case actionTypes.GET_ALL_TENURE_RANGES:
    case actionTypes.GET_TENURE_RANGES:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_ALL_TENURE_RANGES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data_all: action.payload.data
      });

    case actionTypes.GET_TENURE_RANGES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data,
        meta: action.payload.meta
      });

    case actionTypes.CREATE_TENURE_RANGES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.concat([action.payload])
      });

    case actionTypes.UPDATE_TENURE_RANGES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        })
      });

    case actionTypes.DELETE_TENURE_RANGES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.filter(item => item.id !== action.payload.id)
      });

    case actionTypes.CREATE_TENURE_RANGES_FAILED:
    case actionTypes.DELETE_TENURE_RANGES_FAILED:
    case actionTypes.UPDATE_TENURE_RANGES_FAILED:
    case actionTypes.GET_ALL_TENURE_RANGES_FAILED:
    case actionTypes.GET_TENURE_RANGES_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        tenureRanges: null
      });

    default:
      return state;
  }
};

export const actionCreators = {
  allTenureRange: () => ({
    type: actionTypes.GET_ALL_TENURE_RANGES
  }),
  getTenureRangesRequest: filters => ({
    type: actionTypes.GET_TENURE_RANGES,
    filters
  }),
  createTenureRange: body => ({
    type: actionTypes.CREATE_TENURE_RANGES,
    body
  }),
  updateTenureRange: (id, body) => ({
    type: actionTypes.UPDATE_TENURE_RANGES,
    id,
    body
  }),
  deleteTenureRange: id => ({
    type: actionTypes.DELETE_TENURE_RANGES,
    id
  })
};
