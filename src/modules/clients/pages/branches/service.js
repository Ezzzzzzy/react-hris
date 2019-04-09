import request from "../../../../utils/api";

const api_url = "api/v1";

export const getAllBranchesByBrands = ({ client_id, brand_id }) => {
  return request(
    `${api_url}/clients/${client_id}/brands/${brand_id}/branches/all`,
    {}
  );
};
