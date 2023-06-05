import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33939838-11490f037ea089d93e9423619';

export const getImages = async (searchQuery, page) => {
  const response = await axios(
    `${BASE_URL}?q=${searchQuery}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.status === 404) {
    throw new Error('Error loading images from Pixabay', response.status);
  }
  return response.data;
};