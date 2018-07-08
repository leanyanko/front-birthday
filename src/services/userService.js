import axios from "axios";

const userService = {};
const baseUrl = "http://localhost:8080/api/users";
userService.getAll = () => {
  return axios.get(baseUrl);
};

userService.getByID = id => {
  const url = `${this.baseUrl}/${id}`;
  return axios.get(url);
};

export default userService;
