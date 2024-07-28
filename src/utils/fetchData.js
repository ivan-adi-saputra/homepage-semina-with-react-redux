import axios from "axios";
import { config } from "../config";
import handleError from "../utils/handleError";

export async function getData(url, params) {
  try {
    let res = await axios.get(`${config.url_host}/${url}`, { params });

    return res;
  } catch (error) {
    return handleError(error);
  }
}

export async function postData(url, payload, token) {
  try {
    const res = await axios.post(`${config.url_host}/${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  } catch (error) {
    return handleError(error);
  }
}

export async function putData(url, payload) {
  try {
    const res = await axios.put(`${config.url_host}/${url}`, payload);

    return res;
  } catch (error) {
    return handleError(error);
  }
}
