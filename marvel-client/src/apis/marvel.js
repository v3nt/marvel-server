import axios from "axios";
//http://gateway.marvel.com/v1/public/characters?ts={{ts}}&apikey={{apikey}}&hash={{hash}}

export default axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
});
