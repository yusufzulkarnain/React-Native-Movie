const URI_MOVIE_POPULAR = 'https://api.themoviedb.org/3/movie/popular?';
const URI_MOVIE_UP_COMING = 'https://api.themoviedb.org/3/movie/upcoming?';
const URI_MOVIE_TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?';
const URI_MOVIE_GET_DETAIL = 'https://api.themoviedb.org/3/movie/';
const URI_MOVIE_GET_GENRE = 'https://api.themoviedb.org/3/genre/movie/list?';
const API_KEY = '08535c5019d2d19f6eec6b703f129275';
const IMAGE_PATH_ORIGINAL = 'https://image.tmdb.org/t/p/original';
const IMAGE_PATH_500 = 'https://image.tmdb.org/t/p/w500';

const API = {
  api_key: API_KEY,
  movie_popular: URI_MOVIE_POPULAR,
  movie_up_coming: URI_MOVIE_UP_COMING,
  movie_up_top_rated: URI_MOVIE_TOP_RATED,
  movie_get_detail: URI_MOVIE_GET_DETAIL,
  movie_get_genre: URI_MOVIE_GET_GENRE,
  original_image: IMAGE_PATH_ORIGINAL,
  image_Carousel: IMAGE_PATH_500,
};

export default API;
