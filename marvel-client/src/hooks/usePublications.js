import { useState, useEffect } from "react";
import marvel from "../apis/marvel";

const usePublications = (props) => {
  const [publications, setPublications] = useState([]);
  const [publicationsTotal, setPublicationsTotal] = useState(0);
  const [isLoadingPubs, setIsLoadingPubs] = useState(false);

  useEffect(() => {
    setIsLoadingPubs(true);
    items();
  }, [props.page]);

  const items = async () => {
    var dataItems = [];
    const apiLimit = 50;
    // 1009187 = Black Panther for testing
    // careful with API limits
    const response = await marvel.get(`/characters/1009187/comics`, {
      params: {
        limit: apiLimit,
        orderBy: "onsaleDate",
      },
    });

    dataItems.push(...response.data.data.results);

    const totalItems = response.data.data.total;

    var loops = Math.ceil(totalItems / apiLimit);

    console.log(totalItems, "so loops", loops);

    for (let i = 1; i === loops; i++) {
      //   await marvel.get(`/characters/1009187/comics`, {
      //     params: {
      //       offset: apiLimit * i,
      //       limit: 100,
      //       orderBy: "onsaleDate",
      //     },
      //   });

      console.log(i, apiLimit * i);
    }

    console.log(dataItems);

    setPublicationsTotal(response.data.data.total);
    setPublications(dataItems);

    setIsLoadingPubs(false);
  };

  return { isLoadingPubs, publications, publicationsTotal };
};

export default usePublications;
