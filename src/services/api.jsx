import axios from "axios";

export const API = axios.create({
  baseURL:
    "https://api.weatherapi.com/v1/current.json?key=f00dd0ebc8d74c489b7122528221606&q=",
});
