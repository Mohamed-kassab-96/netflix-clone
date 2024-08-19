import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

  
// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODJjMzA4ZGZlOGI0NDQ5ZWY3YTUzZWFkMjYwOTIwNSIsIm5iZiI6MTcyMTU4MDIxMi44NTA2NjEsInN1YiI6IjY2OWQzN2NmNzFhZDIzOWM2NGNkODE2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SG2iUQTaHN2c7TdLaa1fwfupPxeICzu2G4XobZPBTg0'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const fetchFromTMDB = async (url) => {
    const options = {
        // method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + ENV_VARS.TMDB_API_Key,
        }
      };

      const response = await axios.get(url, options);

      if(response.status !== 200){
        throw new Error("Failed to fetch from TMDB" + response.statusText)
      }

      return response.data;
}


