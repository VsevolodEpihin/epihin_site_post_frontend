import axios from "axios";

export const fetchPostsFromApi = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/postqes`);
  return response.data;
};
