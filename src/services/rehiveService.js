import axios from "axios";

const rehiveService = {};
const baseUrl = "https://api.rehive.com/3/admin/transactions";

// axiosaxios..defaultsdefaults..baseURLbaseURL  ==  ''https://api.example.comhttps://api.example.c ';
axios.defaults.headers.common["Authorization"] =
  "Token 68bf2905234fd0e4941ea3e388cf2fd4fba2707e1cf327fe0d86634c7b893b22";
axios.defaults.headers.get["Content-Type"] = "application/json";

rehiveService.getAll = () => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Token 68bf2905234fd0e4941ea3e388cf2fd4fba2707e1cf327fe0d86634c7b893b22"
    },
    baseUrl: baseUrl
  };
  //return axios(options);
  return axios.get(baseUrl);
};

rehiveService.addEvent = event => {
  return axios.post(baseUrl, event);
};

export default rehiveService;
