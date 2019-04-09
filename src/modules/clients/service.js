import request from "../../utils/api";

const url = "api/v1/clients";

export const getAllClients = () => {
  return request(`${url}/all`, {});
};

export const getClients = params => {
  return request(`${url}`, { params });
};

export const createClient = body => {
  return request(`${url}`, { method: "post", body });
};

export const updateClient = (id, body) => {
  return request(`${url}/${id}`, { method: "put", body });
};

export const getSingleClient = id => {
  return request(`${url}/${id}`);
};

export const getClientMembers = (id, params) => {
  return request(`${url}/${id}/members`, { params });
};

export const updateClientMemberEnd = (id, body) => {
  return request(`${url}/${id}/members/tenure`, { method: "put", body });
};

export const updateClientMemberStatus = (id, body) => {
  return request(`${url}/${id}/members/status`, { method: "put", body });
};

export const updateClientMemberReassign = (id, body) => {
  return request(`${url}/${id}/members/branch`, { method: "put", body });
};

export const getClientBusinessUnits = (id, params) => {
  return request(`${url}/${id}/business-units`, { params });
};

export const getAllClientBusinessUnits = id => {
  return request(`${url}/${id}/business-units?all=1`);
};

export const createBusinessUnit = (id, body) => {
  return request(`${url}/${id}/business-units`, { method: "post", body });
};

export const updateBusinessUnit = (id, bu_id, body) => {
  return request(`${url}/${id}/business-units/${bu_id}`, {
    method: "put",
    body
  });
};

export const getAllClientBrands = (id, params) => {
  return request(`${url}/${id}/brands/all`, { params });
};

export const getClientBrands = (id, params) => {
  return request(`${url}/${id}/brands`, { params });
};

export const createBrand = (id, body) => {
  return request(`${url}/${id}/brands/`, { method: "post", body });
};

export const updateBrand = (id, brand_id, body) => {
  return request(`${url}/${id}/brands/${brand_id}`, { method: "put", body });
};

export const getClientBranches = (id, params) => {
  return request(`${url}/${id}/branches`, { params });
};

export const createBranch = (id, body) => {
  return request(`${url}/${id}/branches`, { method: "post", body });
};

export const updateBranch = (id, brand_id, body) => {
  return request(`${url}/${id}/branches/${brand_id}`, { method: "put", body });
};

export const getClientSingleBrand = (client_id, brand_id) => {
  return request(`${url}/${client_id}/brands/${brand_id}/`);
};

export const getClientBrandMembers = (client_id, brand_id, params) => {
  return request(`${url}/${client_id}/brands/${brand_id}/members`, { params });
};
