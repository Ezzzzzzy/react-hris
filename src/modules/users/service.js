import request from "../../utils/api";

const user_url = "api/v1/users/";
const user_group_url = "api/v1/user-groups/";

export const getSingleUserGroup = id => request(user_group_url + id);

export const getUserGroups = params =>
  request(user_group_url, {
    params
  });

export const getAllUserGroups = () => request(user_group_url + "all");

export const getSingleUser = id => request(user_url + id)

export const getUsers = params => request(user_url, { params });

export const updateUser = (id, body) => request(user_url + id, { method: "put", body })

export const updateUserProfile = (id, body) => request(user_url + id + "/update", { method: "put", body })

export const sendInvite = (id, body) => {
  return request(user_url + id + "/invite", {
    method: "post",
    body
  });
}


export const createUserGroups = body =>
  request(user_group_url, {
    method: "post",
    body
  });

export const updateUserGroup = (id, body) =>
  request(user_group_url + id, {
    method: "put",
    body
  });
