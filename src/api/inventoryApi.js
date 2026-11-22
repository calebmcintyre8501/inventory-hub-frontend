// these requests were originally in App.jsx lines 37-267
// moved the fetch stuff here so the page doesnt have all the urls in it
const API = import.meta.env.VITE_API_URL || `http://${window.location.hostname}:3000/api`;

export const getItems = () => fetch(`${API}/items`);
export const getMyItems = () => fetch(`${API}/my-items`, { credentials: "include" });
export const getCurrentUser = () => fetch(`${API}/me`, { credentials: "include" });

export const registerUser = (username, email, password, firstName, lastName) => fetch(`${API}/register`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username, email, password, first_name: firstName, last_name: lastName })
});

export const loginUser = (email, password) => fetch(`${API}/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  credentials: "include",
  body: JSON.stringify({ email, password })
});

export const logoutUser = () => fetch(`${API}/logout`, {
  method: "POST", credentials: "include"
});

export const addItem = (name, description, quantity) => fetch(`${API}/items`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  credentials: "include",
  body: JSON.stringify({ name, description, quantity: Number(quantity) })
});

export const getItem = (id) => fetch(`${API}/items/${id}`);

export const updateItem = (id, name, description, quantity) => fetch(`${API}/items/${id}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  credentials: "include",
  body: JSON.stringify({ name, description, quantity: Number(quantity) })
});

export const deleteItem = (id) => fetch(`${API}/items/${id}`, {
  method: "DELETE", credentials: "include"
});
