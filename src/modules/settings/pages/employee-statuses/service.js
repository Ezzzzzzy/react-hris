import request from "../../../../utils/api";

const url = "api/v1/settings/employment-status";

export const allEmployeeStatus = () => request(`${url}/all`, {});
export const getEmployeeStatus = params => request(url, { params });

export const createEmployeeStatus = body => {
  return request(url, {
    method: "post",
    body
  });
};

export const updateEmployeeStatus = (id, body) => {
  return request(`${url}/${id}`, {
    method: "put",
    body
  });
};

export const deleteEmployeeStatus = id => {
  return request(`${url}/${id}`, {
    method: "delete"
  });
};
