import React, { useState } from "react";
import CharacterItem from "./CharacterItem";
import useCharacters from "../hooks/useCharacters";
import { useParams, Link } from "react-router-dom";

const Pagination = (props) => {
  return (
    <div>
      <div>totalItems {props.totalItems}</div>
      <div>
        page {props.pageNumber} / {props.totalPages}
      </div>
    </div>
  );
};

const List = () => {
  const { pageNumberUrl } = useParams();

  const [pageNumber, setPageNumber] = useState(
    !pageNumberUrl ? 1 : pageNumberUrl
  );

  const { characters, totalItems, totalPages } = useCharacters({
    page: pageNumber,
    ppp: 30,
  });

  // console.log(characters, totalItems, totalPages);
  const renderedList = characters.map((item, i) => {
    return (
      <div key={i}>
        <CharacterItem {...item} />
      </div>
    );
  });

  const gotoPage = (page) => setPageNumber(page);
  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };
  return (
    <div>
      <h3>List</h3>
      <Pagination
        totalItems={totalItems}
        pageNumber={pageNumber}
        totalPages={totalPages}
      />
      <Link to={`/characters/page/20`} className="ui button primary">
        page 20
      </Link>
      <button onClick={() => setPageNumber(1)}>Button 1</button>
      <button onClick={() => handlePageChange(10)}>Button 10</button>
      <button onClick={() => gotoPage(5)}>Button 5</button>

      <ul>{renderedList}</ul>
    </div>
  );
};

export default List;
