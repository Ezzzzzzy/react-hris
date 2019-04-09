// Action Types
export const actionTypes = {
  GET_REASON_FOR_LEAVING: "GET_REASON_FOR_LEAVING",
  GET_REASON_FOR_LEAVING_SUCCESS: "GET_REASON_FOR_LEAVING_SUCCESS",
  GET_REASON_FOR_LEAVING_FAILED: "GET_REASON_FOR_LEAVING_FAILED",

  GET_ALL_REASON_FOR_LEAVING: "GET_ALL_REASON_FOR_LEAVING",
  GET_ALL_REASON_FOR_LEAVING_SUCCESS: "GET_ALL_REASON_FOR_LEAVING_SUCCESS",
  GET_ALL_REASON_FOR_LEAVING_FAILED: "GET_ALL_REASON_FOR_LEAVING_FAILED",

  CREATE_REASON_FOR_LEAVING: "CREATE_REASON_FOR_LEAVING",
  CREATE_REASON_FOR_LEAVING_SUCCESS: "CREATE_REASON_FOR_LEAVING_SUCCESS",
  CREATE_REASON_FOR_LEAVING_FAILED: "CREATE_REASON_FOR_LEAVING_FAILED",

  UPDATE_REASON_FOR_LEAVING: "UPDATE_REASON_FOR_LEAVING",
  UPDATE_REASON_FOR_LEAVING_SUCCESS: "UPDATE_REASON_FOR_LEAVING_SUCCESS",
  UPDATE_REASON_FOR_LEAVING_FAILED: "UPDATE_REASON_FOR_LEAVING_FAILED",

  DELETE_REASON_FOR_LEAVING: "DELETE_REASON_FOR_LEAVING",
  DELETE_REASON_FOR_LEAVING_SUCCESS: "DELETE_REASON_FOR_LEAVING_SUCCESS",
  DELETE_REASON_FOR_LEAVING_FAILED: "DELETE_REASON_FOR_LEAVING_FAILED"
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
    case actionTypes.DELETE_REASON_FOR_LEAVING:
    case actionTypes.UPDATE_REASON_FOR_LEAVING:
    case actionTypes.CREATE_REASON_FOR_LEAVING:
    case actionTypes.GET_REASON_FOR_LEAVING:
    case actionTypes.GET_ALL_REASON_FOR_LEAVING:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_REASON_FOR_LEAVING_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data,
        meta: action.payload.meta
      });

    case actionTypes.GET_ALL_REASON_FOR_LEAVING_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data_all: action.payload.data,
        meta: action.payload.meta
      });

    case actionTypes.CREATE_REASON_FOR_LEAVING_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.concat([action.payload])
      });

    case actionTypes.UPDATE_REASON_FOR_LEAVING_SUCCESS:
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

    case actionTypes.DELETE_REASON_FOR_LEAVING_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.filter(item => item.id !== action.payload.id)
      });

    case actionTypes.GET_REASON_FOR_LEAVING_FAILED:
    case actionTypes.GET_ALL_REASON_FOR_LEAVING_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        data: null
      });

    default:
      return state;
  }
};

export const actionCreators = {
  getLeavingReasonsRequest: filters => ({
    type: actionTypes.GET_REASON_FOR_LEAVING,
    filters
  }),
  getAllLeavingReasonsRequest: () => ({
    type: actionTypes.GET_ALL_REASON_FOR_LEAVING
  }),
  createReasonForLeaving: body => ({
    type: actionTypes.CREATE_REASON_FOR_LEAVING,
    body
  }),
  updateReasonForLeaving: (id, body) => ({
    type: actionTypes.UPDATE_REASON_FOR_LEAVING,
    id,
    body
  }),
  deleteReasonForLeaving: id => ({
    type: actionTypes.DELETE_REASON_FOR_LEAVING,
    id
  })
};
