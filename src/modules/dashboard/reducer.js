import {
  setToken
  //  getToken, deleteToken
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
  LOGIN_FAILED: "LOGIN_FAILED"
};

// Action creators
export const actionCreators = {
  login: payload => ({ type: actionTypes.LOGIN_REQUEST, payload })
};

// Reducer
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  accessToken: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return Object.assign({}, state, { isLoading: true, error: null });

    case actionTypes.LOGIN_SUCCESS:
      setToken(action.auth.access_token);

      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        isAuthenticated: true,
        accessToken: action.auth.access_token
      });

    case actionTypes.LOGIN_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
        isAuthenticated: false,
        accessToken: null
      });

    default:
      return state;
  }
};
