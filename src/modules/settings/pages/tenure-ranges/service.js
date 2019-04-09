import request from "../../../../utils/api";

const url = "api/v1/settings/tenure-types";

export const allTenureRange = () => request(url + "/all", {});
export const getTenureRange = params => request(url, { params });

export const createTenureRange = body => {
  return request(url, {
    method: "post",
    body
  });
};

export const updateTenureRange = (id, body) => {
  return request(`${url}/${id}`, {
    method: "put",
    body
  });
};

export const deleteTenureRange = id => {
  return request(`${url}/${id}`, {
    method: "delete"
  });
};
