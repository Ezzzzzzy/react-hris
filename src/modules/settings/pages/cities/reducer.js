// Action Types
export const actionTypes = {
  GET_ALL_CITIES: "GET_ALL_CITIES",
  GET_ALL_CITIES_SUCCESS: "GET_ALL_CITIES_SUCCESS",
  GET_ALL_CITIES_FAILED: "GET_ALL_CITIES_FAILED",
  GET_CITIES: "GET_CITIES",
  GET_CITIES_SUCCESS: "GET_CITIES_SUCCESS",
  GET_CITIES_FAILED: "GET_CITIES_FAILED",
  CREATE_CITIES: "CREATE_CITIES",
  CREATE_CITIES_SUCCESS: "CREATE_CITIES_SUCCESS",
  CREATE_CITIES_FAILED: "CREATE_CITIES_FAILED",
  UPDATE_CITIES: "UPDATE_CITIES",
  UPDATE_CITIES_SUCCESS: "UPDATE_CITIES_SUCCESS",
  UPDATE_CITIES_FAILED: "UPDATE_CITIES_FAILED",
  DELETE_CITIES: "DELETE_CITIES",
  DELETE_CITIES_SUCCESS: "DELETE_CITIES_SUCCESS",
  DELETE_CITIES_FAILED: "DELETE_CITIES_FAILED"
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
    case actionTypes.CREATE_CITIES:
    case actionTypes.UPDATE_CITIES:
    case actionTypes.DELETE_CITIES:
    case actionTypes.GET_ALL_CITIES:
    case actionTypes.GET_CITIES:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_ALL_CITIES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data_all: action.payload.data,
      });
    case actionTypes.GET_CITIES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data,
        meta: action.payload.meta
      });

    case actionTypes.CREATE_CITIES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.concat([action.payload])
      });

    case actionTypes.UPDATE_CITIES_SUCCESS:
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

    case actionTypes.DELETE_CITIES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.filter(item => item.id !== action.payload.id)
      });

    case actionTypes.GET_CITIES_FAILED:
    case actionTypes.GET_ALL_CITIES_FAILED:
    case actionTypes.CREATE_CITIES_FAILED:
    case actionTypes.UPDATE_CITIES_FAILED:
    case actionTypes.DELETE_CITIES_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        cities: null
      });

    default:
      return state;
  }
};

export const actionCreators = {
  allCity: () => ({
    type: actionTypes.GET_ALL_CITIES
  }),
  getCitiesRequest: filters => ({
    type: actionTypes.GET_CITIES,
    filters
  }),
  createCity: body => ({
    type: actionTypes.CREATE_CITIES,
    body
  }),
  updateCity: (id, body) => ({
    type: actionTypes.UPDATE_CITIES,
    id,
    body
  }),
  deleteCity: id => ({
    type: actionTypes.DELETE_CITIES,
    id
  })
};
