import { CustomUser, CustomUserForm, ShoppingItem } from "../_types/ICustomUser";


const API_BASE_URL = "http://localhost:8080"; 

export const registerUser = async (data: CustomUser) => {
  const response = await fetch(`${API_BASE_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to register user");
  }
  return response.json();
};

export const loginUser = async (data: CustomUserForm) => {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }
  return response.json();
};

export const fetchShoppingItems = async (userId: number) => {
  const response = await fetch(`${API_BASE_URL}/items?userId=${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch shopping items");
  }
  return response.json();
};

export const addShoppingItem = async (item: ShoppingItem) => {
  const response = await fetch(`${API_BASE_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error("Failed to add shopping item");
  }
  return response.json();
};

export const deleteShoppingItem = async (id: number, userId: number) => {
  const response = await fetch(`${API_BASE_URL}/items/${id}?userId=${userId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete shopping item");
  }
};
