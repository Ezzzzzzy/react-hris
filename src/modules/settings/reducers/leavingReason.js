// Action Types
export const actionTypes = {
  GET_LEAVING_REASONS: "GET_LEAVING_REASONS",
  GET_LEAVING_REASONS_SUCCESS: "GET_LEAVING_REASONS_SUCCESS",
  GET_LEAVING_REASONS_FAILED: "GET_LEAVING_REASONS_FAILED",
  CREATE_LEAVING_REASONS: "CREATE_LEAVING_REASONS",
  CREATE_LEAVING_REASONS_SUCCESS: "CREATE_LEAVING_REASONS_SUCCESS",
  CREATE_LEAVING_REASONS_FAILED: "CREATE_LEAVING_REASONS_FAILED",
  UPDATE_LEAVING_REASONS: "UPDATE_LEAVING_REASONS",
  UPDATE_LEAVING_REASONS_SUCCESS: "UPDATE_LEAVING_REASONS_SUCCESS",
  UPDATE_LEAVING_REASONS_FAILED: "UPDATE_LEAVING_REASONS_FAILED"
};

// Reducer
const initialState = {
  leavingReasons: null,
  meta: null,
  isLoading: false,
  errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LEAVING_REASONS:
    case actionTypes.CREATE_LEAVING_REASONS:
    case actionTypes.GET_LEAVING_REASONS:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_LEAVING_REASONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        leavingReasons: action.leavingReasons
      });

    case actionTypes.CREATE_LEAVING_REASONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        leavingReasons: state.leavingReasons.concat([action.newReason])
      });

    case actionTypes.UPDATE_LEAVING_REASONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        leavingReasons: state.leavingReasons.results.map(item => {
          if (item.id === action.updatedReason.id) {
            return action.updatedReason;
          } else {
            return item;
          }
        })
      });

    case actionTypes.GET_LEAVING_REASONS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        leavingReasons: null
      });

    default:
      return state;
  }
};

export const actionCreators = {
  getLeavingReasonsRequest: () => ({
    type: actionTypes.GET_LEAVING_REASONS
  }),
  createLeavingReason: leavingReason => ({
    type: actionTypes.CREATE_LEAVING_REASONS,
    leavingReason
  }),
  updateLeavingReason: (leavingReasonId, leavingReason) => ({
    type: actionTypes.UPDATE_LEAVING_REASONS,
    leavingReasonId,
    leavingReason
  })
};
