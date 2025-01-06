import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your backend URL

export const registerUser = (data) => axios.post(`${API_URL}/users/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/users/login`, data);
export const createIncident = (data) => axios.post(`${API_URL}/incidents`, data);
export const getIncidents = () => axios.get(`${API_URL}/incidents`);
export const updateIncident = (id, data) => axios.put(`${API_URL}/incidents/${id}`, data);
