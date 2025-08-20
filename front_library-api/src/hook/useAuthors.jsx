import axios from "axios";
import { useState } from "react";

export const useAuthors = () => {
  const url = "http://localhost:8080/api/author";

  const [allAuthors, setAuthors] = useState([]);
  const [authorById, setAuthor] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = axios.create({
    baseURL: url
  });
  
  api.interceptors.request.use(
    (config) => new Promise((resolve) => setTimeout(() => resolve(config), 1500))
  );

  const loadAuthors = () =>{
    setLoading(true);
    setError(null);
    return api
      .get()
      .then( (response) =>{ 
        setAuthors(response.data); 
      })
      .catch( (error) => { 
        setError(error);
        throw error; 
      })
      .finally(() => setLoading(false)); 
  }

  const getAuthorsById = (id) =>{
    setLoading(true);
    setError(null);
    return api
      .get(`/${id}`)
      .then( (response) =>{ 
        setAuthor(response.data); 
      })
      .catch( (error) => { 
        setError(error);
        throw error; 
      })
      .finally(() => setLoading(false)); 
  }
  return {allAuthors, authorById, error, loading, loadAuthors, getAuthorsById};
}