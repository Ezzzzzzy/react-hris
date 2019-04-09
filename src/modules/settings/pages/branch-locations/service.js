import request from "../../../../utils/api";

const url = "api/v1/settings/locations";

export const allLocation = () => request(url + "/all", {});
export const getLocation = params => request(url, { params });

export const createLocation = body => {
  return request(url, {
    method: "post",
    body
  });
};

export const updateLocation = (id, body) => {
  return request(`${url}/${id}`, {
    method: "put",
    body
  });
};

export const deleteLocation = id => {
  return request(`${url}/${id}`, {
    method: "delete"
  });
};
