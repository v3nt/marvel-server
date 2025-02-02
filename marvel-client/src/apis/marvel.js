import axios from "axios";

import md5 from "md5";
const myApiURL =
  process.env.REACT_APP_MARVEL_TS +
  process.env.REACT_APP_MARVEL_API_SECRET +
  process.env.REACT_APP_MARVEL_API_KEY;

const myApiURLM5 = md5(myApiURL);
export default axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  params: {
    ts: process.env.REACT_APP_MARVEL_TS,
    apikey: process.env.REACT_APP_MARVEL_API_KEY,
    hash: myApiURLM5,
  },
});
