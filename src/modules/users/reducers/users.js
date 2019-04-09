// Action Types
export const actionTypes = {
  REMOVE_TOAST: "REMOVE_TOAST",

  GET_USERS: "GET_USERS",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  GET_USERS_FAILED: "GET_USERS_FAILED",

  SINGLE_USER: "SINGLE_USER",
  SINGLE_USER_SUCCESS: "SINGLE_USER_SUCCESS",
  SINGLE_USER_FAILED: "SINGLE_USER_FAILED",

  UPDATE_USER: "UPDATE_USER",
  UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
  UPDATE_USER_FAILED: "UPDATE_USER_FAILED",

  UPDATE_PROFILE: "UPDATE_PROFILE",
  UPDATE_PROFILE_SUCCESS: "UPDATE_PROFILE_SUCCESS",
  UPDATE_PROFILE_FAILED: "UPDATE_PROFILE_FAILED",

  INVITE_USERS: "INVITE_USERS",
  INVITE_USERS_SUCCESS: "INVITE_USERS_SUCCESS",
  INVITE_USERS_FAILED: "INVITE_USERS_FAILED"
};

// Reducer
const initialState = {
  data: null,
  data_single: null,
  meta: null,
  isLoading: false,
  errors: null,
  message: "",
  actionType: {
    type: ""
  },
  toast: null
};

export const actionCreators = {
  removeToast: payload => ({
    type: actionTypes.REMOVE_TOAST,
    payload
  }),
  getUsersRequest: params => ({ type: actionTypes.GET_USERS, params }),
  sendInviteRequest: (id, body) => ({
    type: actionTypes.INVITE_USERS,
    id,
    body
  }),
  updateUserRequest: (id, body) => ({ type: actionTypes.UPDATE_USER, id, body }),
  updateUserProfileRequest: (id, body) => ({ type: actionTypes.UPDATE_PROFILE, id, body }),
  getSingleUserRequest: id => ({ type: actionTypes.SINGLE_USER, id })
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_TOAST:
      return Object.assign({}, state, { toast: null });
    case actionTypes.INVITE_USERS:
    case actionTypes.GET_USERS:
    case actionTypes.SINGLE_USER:
    case actionTypes.UPDATE_USER:
    case actionTypes.UPDATE_PROFILE:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.INVITE_USERS_FAILED:
    case actionTypes.GET_USERS_FAILED:
    case actionTypes.SINGLE_USER_FAILED:
    case actionTypes.UPDATE_USER_FAILED:
    case actionTypes.UPDATE_PROFILE_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        profile: null
      });

    case actionTypes.GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data,
        meta: action.payload.meta,
      });
    case actionTypes.SINGLE_USER_SUCCESS:
      console.log(action.payload.data)
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data_single: action.payload.data
      })

    case "GET_USER_GROUPS_SUCCESS":
      return Object.assign({}, state, {
        actionType: {
          type: "GET_USER_GROUPS_SUCCESS"
        }
      });

    case actionTypes.INVITE_USERS_SUCCESS:
      return Object.assign({}, state, {
        toast: { type: "success", message: action.payload.data },
        message: action.payload.data,
        isLoading: false,
        actionType: {
          type: actionTypes.INVITE_USERS_SUCCESS
        }
      });
    case actionTypes.UPDATE_USER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        toast: { type: "success", message: "User Updated" }
      });
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        toast: { type: "success", message: "Profile Updated" }
      });
    default:
      return state;
  }
};
