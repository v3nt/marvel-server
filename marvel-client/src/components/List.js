import React, { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";
import useCharacters from "../hooks/useCharacters";
import { useParams } from "react-router-dom";
import history from "../utils/history";

import Pagination from "./Pagination";

const List = ({ listTitle }) => {
  const { pageNumberUrl } = useParams();

  const [pageNumber, setPageNumber] = useState(
    !pageNumberUrl ? 1 : pageNumberUrl
  );

  const { characters, totalItems, totalPages } = useCharacters({
    page: pageNumber,
    ppp: 45,
  });
  console.log(characters.length);
  useEffect(() => {
    setPageNumber(pageNumberUrl);
  }, [pageNumberUrl]);

  const renderedList = characters.map((item, i) => {
    return (
      <li key={i} className="character-item">
        <CharacterItem {...item} />
      </li>
    );
  });

  const prevPage = () => {
    var newPageNum = pageNumber > 1 ? pageNumber - 1 : pageNumber;
    history.push(`/characters/page/${newPageNum}`);
    setPageNumber(newPageNum);
  };

  const nextPage = () => {
    var newPageNum =
      pageNumber === totalPages ? pageNumber : parseFloat(pageNumber) + 1;
    history.push(`/characters/page/${newPageNum}`);
    setPageNumber(newPageNum);
  };

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
    history.push(`/characters/page/${pageNumber}`);
  };

  const renderList = () => {
    if (characters.length > 0) {
      return (
        <div>
          <Pagination
            totalItems={totalItems}
            pageNumber={pageNumber}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
            nextAction={nextPage}
            prevAction={prevPage}
          />
          <ul className="character-list">{renderedList}</ul>
          <Pagination
            totalItems={totalItems}
            pageNumber={pageNumber}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
            nextAction={nextPage}
            prevAction={prevPage}
          />
        </div>
      );
    }

    return <div className="feedback-loading">Loading...</div>;
  };

  return (
    <div className="container">
      <h1>{listTitle}</h1>
      {renderList()}
    </div>
  );
};

export default List;
