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
  
  export interface CustomUserForm {
    username: string
    password: string
    repeatPassword: string
  }
  
  export interface CustomUser {
    username: string
    password: string
  }
  