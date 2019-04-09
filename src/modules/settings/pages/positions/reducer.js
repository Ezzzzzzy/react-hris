// Action Types
export const actionTypes = {
  GET_ALL_POSITIONS: "GET_ALL_POSITIONS",
  GET_ALL_POSITIONS_SUCCESS: "GET_ALL_POSITIONS_SUCCESS",
  GET_ALL_POSITIONS_FAILED: "GET_ALL_POSITIONS_FAILED",
  GET_POSITIONS: "GET_POSITIONS",
  GET_POSITIONS_SUCCESS: "GET_POSITIONS_SUCCESS",
  GET_POSITIONS_FAILED: "GET_POSITIONS_FAILED",
  CREATE_POSITIONS: "CREATE_POSITIONS",
  CREATE_POSITIONS_SUCCESS: "CREATE_POSITIONS_SUCCESS",
  CREATE_POSITIONS_FAILED: "CREATE_POSITIONS_FAILED",
  UPDATE_POSITIONS: "UPDATE_POSITIONS",
  UPDATE_POSITIONS_SUCCESS: "UPDATE_POSITIONS_SUCCESS",
  UPDATE_POSITIONS_FAILED: "UPDATE_POSITIONS_FAILED",
  DELETE_POSITIONS: "DELETE_POSITIONS",
  DELETE_POSITIONS_SUCCESS: "DELETE_POSITIONS_SUCCESS",
  DELETE_POSITIONS_FAILED: "DELETE_POSITIONS_FAILED"
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
    case actionTypes.UPDATE_POSITIONS:
    case actionTypes.DELETE_POSITIONS:
    case actionTypes.GET_ALL_POSITIONS:
    case actionTypes.CREATE_POSITIONS:
    case actionTypes.GET_POSITIONS:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_ALL_POSITIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data_all: action.payload.data
      });
    case actionTypes.GET_POSITIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data
      });

    case actionTypes.CREATE_POSITIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.concat([action.payload])
      });

    case actionTypes.UPDATE_POSITIONS_SUCCESS:
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

    case actionTypes.DELETE_POSITIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.filter(item => item.id !== action.payload.id)
      });

    case actionTypes.DELETE_POSITIONS_FAILED:
    case actionTypes.UPDATE_POSITIONS_FAILED:
    case actionTypes.CREATE_POSITIONS_FAILED:
    case actionTypes.GET_ALL_POSITIONS_FAILED:
    case actionTypes.GET_POSITIONS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        positions: null
      });

    default:
      return state;
  }
};

export const actionCreators = {
  allPosition: () => ({
    type: actionTypes.GET_ALL_POSITIONS
  }),
  getPositionRequest: filters => ({
    type: actionTypes.GET_POSITIONS,
    filters
  }),
  createPosition: body => ({
    type: actionTypes.CREATE_POSITIONS,
    body
  }),
  updatePosition: (id, body) => ({
    type: actionTypes.UPDATE_POSITIONS,
    id,
    body
  }),
  deletePosition: id => ({
    type: actionTypes.DELETE_POSITIONS,
    id
  })
};
