import { apiUrl } from "./config";

export const getProducts = () => {
  return fetch(`${apiUrl}/products`).then((res) => res.json());
}

export const getProductById = (id) =>
  fetch(`${apiUrl}/products/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
