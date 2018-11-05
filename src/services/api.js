import axios from 'axios';

const path = 'https://swapi.co/api';

export const getCharacters = async () => {
  return await axios.get(`${path}/people/`)
  .then(response => {
    return response.data;
  }).catch((error) => {
    return error;
  });
}

export const getVehicles = async (id) => {
  return await axios.get(`${path}/vehicles/${id}/`)
  .then(response => {
    return response.data;
  }).catch((error) => {
    return error;
  });
}

export const getFilms = async (id) => {
  return await axios.get(`${path}/films/${id}/`)
  .then(response => {
    return response.data;
  }).catch((error) => {
    return error;
  });
}

export const getSpecies = async (id) => {
  return await axios.get(`${path}/species/${id}/`)
  .then(response => {
    return response.data;
  }).catch((error) => {
    return error;
  });
}

export const getPlanets = async (id) => {
  return await axios.get(`${path}/planets/${id}/`)
  .then(response => {
    return response.data;
  }).catch((error) => {
    return error;
  });
}