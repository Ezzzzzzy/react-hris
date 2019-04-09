import request from "../../utils/api";

const url = "api/v1/members/";

export const getMemberProfile = id => request(url + id, {});

export const getMemberWorkHistory = id => request(url + id + "/works", {});

export const getMemberDocuments = id => request(url + id + "/documents", {});

export const getDocumentTypes = id =>
  request("api/v1/settings/document-types/all");

export const uploadDocument = (id, body) =>
  request(url + id + "/upload", {
    method: "post",
    body
  });

export const getMembers = params => request(url, { params });

export const createMember = body => {
  return request(url, {
    method: "post",
    body
  });
};

export const updateMember = (id, body) => {
  return request(url + id, {
    method: "put",
    body
  });
};

export const deployMember = (id, body) => {
  return request(url + id + "/deploy", {
    method: "post",
    body
  });
};

export const bulkUploadMember = body => {
  return request(url + "bulk-upload-member", {
    method: "post",
    body
  });
};

export const endTenure = (id, body) => {
  return request(`api/v1/clients/${id}/members/tenure`, {
    method: "put",
    body
  });
};

export const updateStatus = (id, body) => {
  return request(`api/v1/clients/${id}/members/status`, {
    method: "put",
    body
  });
};

export const createDisciplinary = (id, body) => {
  console.log(id, body)
  return request(`api/v1/members/${id}/disciplinary-actions`, {
    method: "post",
    body
  })
}

export const updateDisciplinary = (id, da_id, body) => {
  return request(`${url}/${id}/disciplinary-actions/${da_id}`, {
    method: "put",
    body
  })
}