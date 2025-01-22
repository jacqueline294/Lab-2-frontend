import axios from "axios";

const API_URL = "http://localhost:8080";

export const createUser = async (userData: { username: string; password: string }) => {
  return axios.post(`${API_URL}/auth`, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const fetchShoppingList = async () => {
  return axios.get(`${API_URL}/shopping-list`);
};

export const addShoppingItem = async (item: { name: string; quantity: number }) => {
  return axios.post(`${API_URL}/shopping-list`, item);
};

export const updateShoppingItem = async (id: number, item: { name: string; quantity: number }) => {
  return axios.put(`${API_URL}/shopping-list/${id}`, item);
};

export const deleteShoppingItem = async (id: number) => {
  return axios.delete(`${API_URL}/shopping-list/${id}`);
};
