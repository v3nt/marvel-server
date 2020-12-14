import { useState, useEffect } from "react";
import md5 from "md5";
import marvel from "../apis/marvel";
//http://gateway.marvel.com/v1/public/characters?ts={{ts}}&apikey={{apikey}}&hash={{hash}}

const myApiURL =
  process.env.REACT_APP_MARVEL_TS +
  process.env.REACT_APP_MARVEL_API_SECRET +
  process.env.REACT_APP_MARVEL_API_KEY;

const myApiURLM5 = md5(myApiURL);

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch(
    //     `http://gateway.marvel.com/v1/public/characters?ts=${process.env.REACT_APP_MARVEL_TS}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${myApiURLM5}`
    //   );
    //   const data = await response.json();

    //   console.log("data");
    //   console.log(data.data.results);
    //   setCharacters(data.data.results);
    // };
    // fetchData();
    items();
  }, []);

  const items = async (term) => {
    const response = await marvel.get("/characters", {
      params: {
        ts: 1,
        apikey: process.env.REACT_APP_MARVEL_API_KEY,
        hash: myApiURLM5,
        limit: 20,
      },
    });
    setCharacters(response.data.data.results);
    console.log("response");
    console.log(response.data.data);
  };

  return [characters];
};

export default useCharacters;
