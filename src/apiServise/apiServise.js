import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  per_page: 4,
};

export const fetchCampersDetails = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}/credits`);
    return response;
  } catch (error) {
    console.error(`Error fetching movie details ${movieId}`);
    throw error;
  }
};
