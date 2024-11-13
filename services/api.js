import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

//user API
const token = localStorage.getItem('token')
const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}
export const registerUser = async (userData) => {
  const response = await api.post("/register", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await api.post("/login", userData);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/logout");
  return response.data;
};
export const updateUser = async (userData) => {
  const response = await api.post("/user", userData, config);
  return response.data;
};
export const getUser = async () => {
  const response = await api.get("/user", config);
  return response.data;
};
// categories API
export const fetchCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};
export const fetchCategoryById = async (id) => {
  const response = await api.get(`/categories/${id}`);
  return response.data;
};
//Banner API
export const fetchBanners = async () => {
  const response = await api.get("/banners");
  return response.data;
};
// product API
export const fetchProducts = async (filter) => {
  const response = await api.get(`/products?filter=${filter}`);
  return response.data;
};

// search product
export const searchProducts = async (q) => {
  const response = await api.get(`/products/search?title=${q}`);
  return response.data;
};
export const fetchProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const socialLogin = async (data) => {
  const response = await api.post(`/social/login`, data);
  return response.data;
};
