import axios from "axios";
import { useState } from "react";

export const useBook = () => {

  const [allBook, setBooks] = useState([]);
  const [bookById, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = "http://localhost:8080/api/books";

  const api = axios.create({ baseURL : url })

  api.interceptors.request.use(
    (config) => new Promise((resolve) => setTimeout(() => resolve(config), 1500))
  );

  const loadBook = () =>{
    setLoading(true);
    setError(null);
    return api
    .get()
    .then((response) => setBooks(response.data))
    .catch((error) => {
      setError(error);
      throw error;
    })
    .finally(() => setLoading(false));
  }

  const getBookById = (id) =>{
    setLoading(true);
    setError(null);
    return api
    .get(`/${id}`)
    .then((response) => setBook(response.data))
    .catch((error) => {
      setError(error);
      throw error;
    })
    .finally(() => setLoading(false));
  }

  return { loading, error, bookById, allBook, loadBook, getBookById};
}