import request from "../../utils/api";

export const login = params => {
  const credentials = {
    ...params,
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET
  };

  return request("oauth/token", {
    method: "post",
    body: credentials
  });
};

export const logout = id => {
  return request("api/auth/logout/" + id, {});
};
