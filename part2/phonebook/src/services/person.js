import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data);
};

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const update = (id, newPerson) => {
  return axios
    .put(`${baseUrl}/${id}`, newPerson)
    .then((response) => response.data);
};

const services = {
    getAll,
    update,
    create
}

export default services
