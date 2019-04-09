import request from "../../../../utils/api";

const url = "api/v1/settings/regions";

export const allRegions = () => request(`${url}/all`, {});
export const getRegions = params => request(url, { params });

export const createRegions = body => {
  return request(url, {
    method: "post",
    body
  });
};

export const updateRegions = (id, body) => {
  return request(`${url}/${id}`, {
    method: "put",
    body
  });
};

export const deleteRegions = id => {
  return request(`${url}/${id}`, {
    method: "delete"
  });
};
