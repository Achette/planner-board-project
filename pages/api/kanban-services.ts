import axios from "axios";
import { BASE_URL } from "../../constants/system";

export const getToDo = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: { "Content-type": "application/json" },
    timeout: 4000,
  });

  return instance;
};

export const api = getToDo(String(`${BASE_URL}`));
