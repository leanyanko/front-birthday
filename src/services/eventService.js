import axios from 'axios';

const eventService = {};
const baseUrl = 'http://localhost:8080/api/birthdays';

eventService.getAll = () => {
  return axios.get(baseUrl);
};

eventService.addEvent = event => {
  console.log(event);
  return axios.post(baseUrl, event);
};

eventService.updateEvent = event => {
  return axios.patch(`http://localhost:8080/api/birthdays/${event.id}`, event)
}

export default eventService;
