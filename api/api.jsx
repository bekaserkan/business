import axios from "axios";

export const url = axios.create({
  baseURL: "https://hit-travel.org/",
});

export const api = axios.create({
  baseURL: "http://80.90.185.91/",
});
