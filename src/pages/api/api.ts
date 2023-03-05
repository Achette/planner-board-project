import axios from "axios";
import { BASE_URL } from "../../constants/system";
import { loginUserData, userData } from "../../types";

export const ApiPlanner = {
  // Busca todos os To-do
  getAll: async () => {
    const response = await axios.get(`${BASE_URL}/todo`);
    return response.data;
  },

  getById: async (id: number) => {
    const response = await axios.get(`${BASE_URL}/todo/${id}`);
    return response.data;
  },

  create: async (user: userData) => {
    const response = await axios.post(`${BASE_URL}/users`, user);
    return response.data;
  },

  getAllUser: async (userData: loginUserData) => {
    const response = await axios.get(`${BASE_URL}/users`);
    const users = await response.data;

    let auth = false;
    users.forEach((user: loginUserData) => {
      if (
        user.email === userData.email &&
        user.password === userData.password
      ) {
        auth = true;
      }
    });
    return auth;
  },
};
