import axios from 'axios';

const API_BASE_URL = 'http://localhost:3333/api'; 

export const createAccount = async (data) => {
    return axios.post(`${API_BASE_URL}/accounts`, data);
};

export const getUserInfo = async (customerID) => {
    return axios.get(`${API_BASE_URL}/users/${customerID}`);
};
