import axios from "axios";

const userService = {};
const baseUrl = "http://localhost:8080/api/userss";
userService.getAll = () => {
  return axios.get(baseUrl);
};

export default userService;
