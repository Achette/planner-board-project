import axios from "axios";
import { BASE_URL } from "../../constants/system";
import { loginUserData, userData, WeatherProps } from "../../types";

export const ApiPlanner = {
  getAll: async () => {
    const response = await axios.get(`${BASE_URL}/todo`);
    return response.data;
  },
  
  getById: async (id: number) => {
    const response = await axios.get(`${BASE_URL}/todo/${id}`);
    return response.data;
  },
  
  // Gerencia o cadastro e login dos usuários
  create: async (user: userData) => {
    const response = await axios.post(`${BASE_URL}/users`, user);
    return response.data;
  },

  getAllUser: async (userData: loginUserData) => {
    const response = await axios.get(`${BASE_URL}/users`);
    const users = await response.data;

    let request = {
      auth: false,
      error: true,
    };
    users.forEach((user: loginUserData) => {
      if (
        user.email === userData.email &&
        user.password === userData.password
      ) {
        return (request = {
          auth: true,
          error: false,
        });
      }
    });
    return request;
  },

  // Api que faz a requisição do clima

  getWeather: async (lat = 0, lon = 0) => {
    const response = await axios.get<WeatherProps>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a0b021d01518866ba7871cc0b3088045`
    );
    const data = response.data;

    return data;
  },
};
