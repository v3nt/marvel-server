import axios from "axios";

import md5 from "md5";
const myApiURL =
  process.env.REACT_APP_MARVEL_TS +
  process.env.REACT_APP_MARVEL_API_SECRET +
  process.env.REACT_APP_MARVEL_API_KEY;

const myApiURLM5 = md5(myApiURL);
console.log("REACT_APP_MARVEL_API_KEY", process.env.REACT_APP_MARVEL_API_KEY);
export default axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts: 1,
    apikey: process.env.REACT_APP_MARVEL_API_KEY,
    hash: myApiURLM5,
    limit: 30,
  },
});
