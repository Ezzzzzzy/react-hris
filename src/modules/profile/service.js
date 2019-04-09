import request from "../../utils/api";

export const whoami = () => {
  return request("api/v1/user/me", {});
};
