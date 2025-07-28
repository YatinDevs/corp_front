import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

// Function to log responses
const logResponse = (endpoint, response) => {
  console.log(`Response from ${endpoint}:`, response);
  return response;
};

// Function to log errors
const logError = (endpoint, error) => {
  console.error(`Error from ${endpoint}:`, error);
  return Promise.reject(error);
};

// API functions
export const fetchProducts = async (params = {}) => {
  try {
    const response = await api.get("/products", { params });
    return logResponse("/products", response.data);
  } catch (error) {
    return logError("/products", error);
  }
};

export const fetchFeaturedProducts = async () => {
  try {
    const response = await api.get("/products/featured");
    return logResponse("/products/featured", response.data);
  } catch (error) {
    return logError("/products/featured", error);
  }
};

export const fetchSingleProducts = async () => {
  try {
    const response = await api.get("/products/singlenew");
    return logResponse("/products/single", response.data);
  } catch (error) {
    return logError("/products/single", error);
  }
};

export const fetchComboProducts = async () => {
  try {
    const response = await api.get("/products/combo");
    return logResponse("/products/combo", response.data);
  } catch (error) {
    return logError("/products/combo", error);
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return logResponse(`/products/${id}`, response.data);
  } catch (error) {
    return logError(`/products/${id}`, error);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await api.get("/categories");
    return logResponse("/categories", response.data);
  } catch (error) {
    return logError("/categories", error);
  }
};

export const fetchFeaturedCategories = async () => {
  try {
    const response = await api.get("/categories/featured");
    return logResponse("/categories/featured", response.data);
  } catch (error) {
    return logError("/categories/featured", error);
  }
};

export const fetchCategoryProducts = async (categoryId) => {
  try {
    const response = await api.get(`/categories/${categoryId}/products`);
    return logResponse(`/categories/${categoryId}/products`, response.data);
  } catch (error) {
    return logError(`/categories/${categoryId}/products`, error);
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await api.get("/products/search", {
      params: { q: query },
    });
    return logResponse("/products/search", response.data);
  } catch (error) {
    return logError("/products/search", error);
  }
};

export default api;
