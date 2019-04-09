import API from "../../utils/api";

export const login = async credentials => {
  try {
    credentials = {
      ...credentials,
      grant_type: "password",
      client_id: 2,
      client_secret: "3tajNZPebh9uqWxxmqnkuKVWIhh0Qr5mDC3iXSsQ"
    };

    const response = await API.post("oauth/token", credentials);

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message);
    }

    return json;
  } catch (err) {
    throw err;
  }
};

export const whoami = async () => {
  try {
    const response = await API.get("api/v1/whoami");

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message);
    }

    return json;
  } catch (err) {
    throw err;
  }
};
