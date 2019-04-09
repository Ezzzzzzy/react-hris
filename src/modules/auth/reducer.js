import {
  setToken,
  deleteToken
  // getToken
} from "../../utils/token";

// Action Types
export const actionTypes = {
  AUTH_CHECK: "AUTH_CHECK",
  AUTH_LOGIN: "AUTH_LOGIN",
  AUTH_LOGOUT: "AUTH_LOGOUT",

  AUTH_REFRESH_TOKEN: "AUTH_REFRESH_TOKEN",
  AUTH_RESET_PASSWORD: "AUTH_RESET_PASSWORD",
  AUTH_USER: "AUTH_USER",

  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED",

  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAILED: "LOGOUT_FAILED",

  GET_AUTH: "GET_AUTH",
  GET_AUTH_SUCCESS: "GET_AUTH_SUCCESS",
  GET_AUTH_FAILED: "GET_AUTH_FAILED"
};

// Action creators
export const actionCreators = {
  login: payload => ({ type: actionTypes.LOGIN_REQUEST, payload }),
  logout: id => ({ type: actionTypes.LOGOUT_REQUEST, id })
};

// Reducer
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  accessToken: null,
  errors: null,
  permissions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGOUT_REQUEST:
    case actionTypes.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        errors: null
      });

    case actionTypes.LOGIN_SUCCESS:
      setToken(action.payload.access_token);

      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        isAuthenticated: true,
        accessToken: action.payload.access_token
      });

    case actionTypes.LOGOUT_SUCCESS:
      deleteToken();

      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: false
      });

    case actionTypes.LOGOUT_FAILED:
    case actionTypes.LOGIN_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        isAuthenticated: false,
        accessToken: null
      });

    default:
      return state;
  }
};
