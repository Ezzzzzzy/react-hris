import request from "../../../../utils/api";

const url = "api/v1/settings/document-types";

export const getDocumentTypes = params => request(url, { params });

export const getAllDocumenTypes = params => request(url + "/all", { params });

export const createDocumentType = body => {
  return request(url, {
    method: "post",
    body
  });
};

export const updateDocumentType = (id, body) => {
  return request(`${url}/${id}`, {
    method: "put",
    body
  });
};

export const deleteDocumentType = id => {
  return request(`${url}/${id}`, {
    method: "delete"
  });
};
