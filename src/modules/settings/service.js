import request from "../../utils/api";

export const getDocumentTypes = params => request("document-types", { params });

export const createDocumentType = params => {
  return request("document-types", {
    method: "post",
    body: params
  });
};

export const updateDocumentType = params => {
  return request("document-types", {
    method: "patch",
    body: params
  });
};

export const getLeavingReasons = params =>
  request("reasons-for-leaving", { params });

export const createLeavingReason = params => {
  return request("reasons-for-leaving", {
    method: "post",
    body: params
  });
};

export const updateLeavingReason = params => {
  return request("reasons-for-leaving", {
    method: "patch",
    body: params
  });
};

export const getRegions = params => request("regions", { params });

export const getCities = params => request("cities", { params });

export const getLocations = params => request("locations", { params });

export const getTenureTypes = params => request("tenure-types", { params });

export const getPositions = params => request("positions", { params });

export const allBrand = () => request("api/v1/settings/brands/all", {});

export const allBusinessUnits = () => request("api/v1/business-units/all", {});
