// Action Types
export const actionTypes = {
  GET_PROFILE_REQUEST: "GET_PROFILE_REQUEST",
  GET_PROFILE_REQUEST_SUCCESS: "GET_PROFILE_REQUEST_SUCCESS",
  GET_PROFILE_REQUEST_FAILED: "GET_PROFILE_REQUEST_FAILED"
};

// Reducer
const initialState = {
  data: null,
  permissions: [],
  client: [],
  isLoading: false,
  errors: null
};

export const actionCreators = {
  getProfileRequest: () => ({ type: actionTypes.GET_PROFILE_REQUEST })
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_REQUEST:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_PROFILE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.user,
        permissions: action.payload.permissions,
        client: action.payload.client
      });

    case actionTypes.GET_PROFILE_REQUEST_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        data: null
      });

    default:
      return state;
  }
};
