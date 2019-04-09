import { getToken } from "./token";
import urlFormat from "./urlFormat";
// import { codeMessage } from "./errors";

const API_URL = `${process.env.REACT_APP_API_URL}`;

const fetchOpts = (method, body = null) => {
  const accessToken = getToken();

  let option = null;

  if (body instanceof FormData) {
    option = getFormDataOption(method, body, accessToken);
  } else {
    option = getJsonOption(method, body, accessToken);
  }

  return option;
};

const getJsonOption = (method, body, accessToken) => {
  let option = Object.assign(
    {},
    {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    },
    body
      ? {
          body: JSON.stringify(body)
        }
      : {}
  );

  if (accessToken) {
    option = Object.assign(
      {},
      {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      },
      body
        ? {
            body: JSON.stringify(body)
          }
        : {}
    );
  }

  return option;
};

const getFormDataOption = (method, body, accessToken) => {
  let option = Object.assign(
    {},
    {
      method,
      headers: {
        Accept: "application/json"
      }
    },
    body
      ? {
          body: body
        }
      : {}
  );

  if (accessToken) {
    option = Object.assign(
      {},
      {
        method,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      },
      body
        ? {
            body: body
          }
        : {}
    );
  }

  return option;
};

export const API = {
  get: url => fetch(`${API_URL}${url}`, fetchOpts("GET")),
  post: (url, data) => fetch(`${API_URL}${url}`, fetchOpts("POST", data)),
  put: (url, data) => fetch(`${API_URL}${url}`, fetchOpts("PUT", data)),
  patch: (url, data) => fetch(`${API_URL}${url}`, fetchOpts("PATCH", data)),
  delete: url => fetch(`${API_URL}${url}`, fetchOpts("DELETE"))
};

const request = async (url, options = {}) => {
  // Get the request method
  let method = "get";
  if (options.method) {
    method = options.method.toLowerCase();
  }

  // Get params
  if (options.params) {
    url = urlFormat(url, options.params);
  }

  let body = null;
  if (options.body) {
    body = options.body;
  }

  // Do the request
  try {
    const response = await API[method](url, body);
    const json = await response.json();

    if (!response.ok) {
      // original
      // throw codeMessage[json.error_code];
      // modified
      throw json.errors;
    }

    return json;
  } catch (err) {
    throw err;
  }
};

export default request;
