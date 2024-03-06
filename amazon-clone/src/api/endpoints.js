export const API_BASE_URL = 'http://localhost:3000/api';

export const LOGIN_ENDPOINT = `${API_BASE_URL}/auth/login`;
export const REGISTER_ENDPOINT = `${API_BASE_URL}/auth/register`;
export const USER_ACCOUNT_ENDPOINT = `${API_BASE_URL}/user/account`;
export const AUTH_ENDPOINTS = {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`,
  };
  
  export const USER_ENDPOINTS = {
    profile: `${API_BASE_URL}/user/account`,
    settings: `${API_BASE_URL}/user/settings`,
  };
  