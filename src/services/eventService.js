import axios from "axios";

const eventService = {};
const baseUrl = "http://localhost:8080/api/user";
eventService.getAll = () => {
  return axios.get(baseUrl);
};

export default eventService;
