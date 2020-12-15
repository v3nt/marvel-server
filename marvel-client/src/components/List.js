import React, { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";
import useCharacters from "../hooks/useCharacters";
import { useParams, Link } from "react-router-dom";
import history from "../utils/history";

import Pagination from "./Pagination";

const List = () => {
  const { pageNumberUrl } = useParams();

  const [pageNumber, setPageNumber] = useState(
    !pageNumberUrl ? 1 : pageNumberUrl
  );

  const { characters, totalItems, totalPages } = useCharacters({
    page: pageNumber,
    ppp: 30,
  });

  useEffect(() => {
    setPageNumber(pageNumberUrl);
  }, [pageNumberUrl]);

  const renderedList = characters.map((item, i) => {
    return (
      <div key={i}>
        <CharacterItem {...item} />
      </div>
    );
  });
  const prevPage = () => {
    var newPageNum = pageNumber > 1 ? pageNumber - 1 : pageNumber;
    history.push(`/characters/page/${newPageNum}`);
    setPageNumber(newPageNum);
  };
  const nextPage = () => {
    var newPageNum =
      pageNumber == totalPages ? pageNumber : parseFloat(pageNumber) + 1;
    history.push(`/characters/page/${newPageNum}`);
    setPageNumber(newPageNum);
  };

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
    history.push(`/characters/page/${pageNumber}`);
  };

  return (
    <div className="container">
      <h3>List</h3>
      <Pagination
        totalItems={totalItems}
        pageNumber={pageNumber}
        totalPages={totalPages}
        nextAction={nextPage}
        prevAction={prevPage}
      />
      <Link to={`/characters/page/20`} className="ui button primary">
        page 20
      </Link>

      <button onClick={() => handlePageChange(1)}>Button 1</button>
      <button onClick={() => handlePageChange(10)}>Button 10</button>
      <button onClick={() => handlePageChange(5)}>Button 5</button>
      <ul>{renderedList}</ul>
    </div>
  );
};

export default List;
