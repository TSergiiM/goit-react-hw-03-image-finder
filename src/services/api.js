import axios from 'axios';

const API_KEY = '25371642-f176f31923c7990a059799838';
const BASE_URL = 'https://pixabay.com/api/';

export function searchQueryAPI(searchQuery, page) {
  return fetch(
    `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`bla-bla-bla`));
  });
}
// axios.get();
