// Action Types
export const actionTypes = {
  GET_MEMBERS: "GET_MEMBERS",
  GET_MEMBERS_SUCCESS: "GET_MEMBERS_SUCCESS",
  GET_MEMBERS_FAILED: "GET_MEMBERS_FAILED"
};

// Reducer
const initialState = {
  data: null,
  meta: null,
  isLoading: false,
  errors: null
};

export const actionCreators = {
  getMembersRequest: params => ({ type: actionTypes.GET_MEMBERS, params })
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MEMBERS:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_MEMBERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.results,
        meta: {
          total: action.payload.count,
          next: action.payload.next,
          previous: action.payload.previous
        }
      });

    case actionTypes.GET_MEMBERS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors
      });

    default:
      return state;
  }
};
