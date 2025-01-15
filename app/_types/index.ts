export interface User {
    id: number;
    username: string;
  }
  
  export interface ShoppingItem {
    id: number;
    userId: number;
    name: string;
    quantity: number;
  }
  
  export interface RegisterRequest {
    username: string;
    password: string;
  }
  
  export interface LoginRequest {
    username: string;
    password: string;
  }
  