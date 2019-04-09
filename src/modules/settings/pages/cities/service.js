import request from "../../../../utils/api";

const url = "api/v1/settings/cities";

export const allCity = () => request(`${url}/all`, {});
export const getCity = params => request(url, { params });

export const createCity = body => {
  return request(url, {
    method: "post",
    body
  });
};

export const updateCity = (id, body) => {
  return request(`${url}/${id}`, {
    method: "put",
    body
  });
};

export const deleteCity = id => {
  return request(`${url}/${id}`, {
    method: "delete"
  });
};
