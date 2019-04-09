import request from "../../../../utils/api";

const url = "api/v1/settings/positions";

export const allPosition = () => request(`${url}/all`, {});
export const getPosition = params => request(url, { params });

export const createPosition = body => {
  return request(url, {
    method: "post",
    body
  });
};

export const updatePosition = (id, body) => {
  return request(`${url}/${id}`, {
    method: "put",
    body
  });
};

export const deletePosition = id => {
  return request(`${url}/${id}`, {
    method: "delete"
  });
};
