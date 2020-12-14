import axios from "axios";
//http://gateway.marvel.com/v1/public/characters?ts={{ts}}&apikey={{apikey}}&hash={{hash}}

const myApiURL =
  process.env.REACT_APP_MARVEL_TS +
  process.env.REACT_APP_MARVEL_API_SECRET +
  process.env.REACT_APP_MARVEL_API_KEY;

console.log(myApiURL);

const myApiURLM5 = myApiURLM5(myApiURL);

console.log(myApiURLM5);

export default axios.create({
  baseURL: myApiURL,
});
