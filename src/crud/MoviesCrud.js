import axios from "axios";
import * as constants from "./constants";

export const Movies_CRUD_URL = constants.API_BASE_URL + "Movies";

export function getMoviesList(organizationId) {
    return axios.get(Movies_CRUD_URL+"/MovieList");
}

export function getMoviesDetail(imdbID) {
    debugger;
    const imdb=imdbID
    return axios.get(Movies_CRUD_URL+"/MovieDetail/",{ params: { imdb }});
}