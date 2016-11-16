import apiKey from '../config/apikey.js';

export function getMovieInfo(imdbId){
  return fetch(`https://api.themoviedb.org/3/find/${imdbId}?api_key=${apiKey}&language=en-US&external_source=imdb_id`)
    .then(data => data.json())
}
