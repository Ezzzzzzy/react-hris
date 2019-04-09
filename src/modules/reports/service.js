import request from "../../utils/api";

const url = "api/v1/reports";

export const getReports = params => request(url, { params });

export const generateReport = body => request(url, { method: "post", body });

export const generateFromTemplate = id => request(`${url}/${id}/template`)

export const getTemplates = () => request(url + "/all")