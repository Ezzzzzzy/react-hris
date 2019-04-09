// Action Types
export const actionTypes = {
  GET_ALL_LOCATIONS: "GET_ALL_LOCATIONS",
  GET_ALL_LOCATIONS_SUCCESS: "GET_ALL_LOCATIONS_SUCCESS",
  GET_ALL_LOCATIONS_FAILED: "GET_ALL_LOCATIONS_FAILED",
  GET_LOCATIONS: "GET_LOCATIONS",
  GET_LOCATIONS_SUCCESS: "GET_LOCATIONS_SUCCESS",
  GET_LOCATIONS_FAILED: "GET_LOCATIONS_FAILED",
  CREATE_LOCATIONS: "CREATE_LOCATIONS",
  CREATE_LOCATIONS_SUCCESS: "CREATE_LOCATIONS_SUCCESS",
  CREATE_LOCATIONS_FAILED: "CREATE_LOCATIONS_FAILED",
  UPDATE_LOCATIONS: "UPDATE_LOCATIONS",
  UPDATE_LOCATIONS_SUCCESS: "UPDATE_LOCATIONS_SUCCESS",
  UPDATE_LOCATIONS_FAILED: "UPDATE_LOCATIONS_FAILED",
  DELETE_LOCATIONS: "DELETE_LOCATIONS",
  DELETE_LOCATIONS_SUCCESS: "DELETE_LOCATIONS_SUCCESS",
  DELETE_LOCATIONS_FAILED: "DELETE_LOCATIONS_FAILED"
};

// Reducer
const initialState = {
  data: null,
  data_all: null,
  meta: null,
  isLoading: false,
  errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_ALL_LOCATIONS:
    case actionTypes.GET_ALL_LOCATIONS:
    case actionTypes.UPDATE_LOCATIONS:
    case actionTypes.CREATE_LOCATIONS:
    case actionTypes.GET_LOCATIONS:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_ALL_LOCATIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data_all: action.payload.data
      });
    case actionTypes.GET_LOCATIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data,
        meta: action.payload.meta
      });

    case actionTypes.CREATE_LOCATIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.concat([action.payload])
      });

    case actionTypes.UPDATE_LOCATIONS_SUCCESS:
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

    case actionTypes.DELETE_LOCATIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.filter(item => item.id !== action.payload.id)
      });

    case actionTypes.UPDATE_LOCATIONS_FAILED:
    case actionTypes.DELETE_LOCATIONS_FAILED:
    case actionTypes.CREATE_LOCATIONS_FAILED:
    case actionTypes.GET_ALL_LOCATIONS_FAILED:
    case actionTypes.GET_LOCATIONS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        locations: null
      });

    default:
      return state;
  }
};

export const actionCreators = {
  allLocation: () => ({
    type: actionTypes.GET_ALL_LOCATIONS
  }),
  getLocationsRequest: filters => ({
    type: actionTypes.GET_LOCATIONS,
    filters
  }),
  createLocation: body => ({
    type: actionTypes.CREATE_LOCATIONS,
    body
  }),
  updateLocation: (id, body) => ({
    type: actionTypes.UPDATE_LOCATIONS,
    id,
    body
  }),
  deleteLocation: id => ({
    type: actionTypes.DELETE_LOCATIONS,
    id
  })
};
