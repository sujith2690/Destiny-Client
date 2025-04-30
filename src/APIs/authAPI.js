import axios from "axios";

const API = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

export const logInApi = (formData) => API.post("/auth/login", formData);
export const signUpApi = (formData) => API.post("/auth/signUp", formData);

export const packageApi = () => API.get("/packages/all");
export const singlePackageApi = (packageId) => API.get(`/packages/single/${packageId}`);

