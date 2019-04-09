import request from "../../../../utils/api";

const url = "api/v1/settings/reasons-for-leaving";

export const getReasons = params => request(url, { params });

export const getAllReasons = params => request(`${url}/all`, { params });

export const createReasons = body => {
  return request(url, {
    method: "post",
    body
  });
};

export const updateReasons = (id, body) => {
  return request(`${url}/${id}`, {
    method: "put",
    body
  });
};

export const deleteReasons = id => {
  return request(`${url}/${id}`, {
    method: "delete"
  });
};
