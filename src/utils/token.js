import { purgeStoredState } from "redux-persist";

export const setToken = accessToken => {
  window.localStorage.setItem("peopleserveTKN", accessToken);

  return accessToken;
};

export const getToken = () => {
  return window.localStorage.getItem("peopleserveTKN");
};

export const deleteToken = () => {
  return window.localStorage.removeItem("peopleserveTKN");
};

export const backToLoginPage = () => {
  deleteToken();
  purgeStoredState();
  window.location.href = "/";
};
