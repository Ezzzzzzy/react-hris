// Action Types
export const actionTypes = {
  GET_ALL_REGIONS: "GET_ALL_REGIONS",
  GET_ALL_REGIONS_SUCCESS: "GET_ALL_REGIONS_SUCCESS",
  GET_ALL_REGIONS_FAILED: "GET_ALL_REGIONS_FAILED",
  GET_REGIONS: "GET_REGIONS",
  GET_REGIONS_SUCCESS: "GET_REGIONS_SUCCESS",
  GET_REGIONS_FAILED: "GET_REGIONS_FAILED",
  CREATE_REGIONS: "CREATE_REGIONS",
  CREATE_REGIONS_SUCCESS: "CREATE_REGIONS_SUCCESS",
  CREATE_REGIONS_FAILED: "CREATE_REGIONS_FAILED",
  UPDATE_REGIONS: "UPDATE_REGIONS",
  UPDATE_REGIONS_SUCCESS: "UPDATE_REGIONS_SUCCESS",
  UPDATE_REGIONS_FAILED: "UPDATE_REGIONS_FAILED",
  DELETE_REGIONS: "DELETE_REGIONS",
  DELETE_REGIONS_SUCCESS: "DELETE_REGIONS_SUCCESS",
  DELETE_REGIONS_FAILED: "DELETE_REGIONS_FAILED"
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
    case actionTypes.DELETE_REGIONS:
    case actionTypes.UPDATE_REGIONS:
    case actionTypes.CREATE_REGIONS:
    case actionTypes.GET_REGIONS:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_ALL_REGIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data_all: action.payload.data
      });
    case actionTypes.GET_REGIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data,
        meta: action.payload.meta
      });

    case actionTypes.CREATE_REGIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.concat([action.payload])
      });

    case actionTypes.UPDATE_REGIONS_SUCCESS:
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

    case actionTypes.DELETE_REGIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.filter(item => item.id !== action.payload.id)
      });

    case actionTypes.GET_REGIONS_FAILED:
    case actionTypes.CREATE_REGIONS_FAILED:
    case actionTypes.UPDATE_REGIONS_FAILED:
    case actionTypes.DELETE_REGIONS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        regions: null
      });

    default:
      return state;
  }
};

export const actionCreators = {
  allRegions: () => ({
    type: actionTypes.GET_ALL_REGIONS
  }),
  getRegionsRequest: filters => ({
    type: actionTypes.GET_REGIONS,
    filters
  }),
  createRegion: body => ({
    type: actionTypes.CREATE_REGIONS,
    body
  }),
  updateRegion: (id, body) => ({
    type: actionTypes.UPDATE_REGIONS,
    id,
    body
  }),
  deleteRegion: id => ({
    type: actionTypes.DELETE_REGIONS,
    id
  })
};
