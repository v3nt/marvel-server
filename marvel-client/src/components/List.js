import React from "react";
import CharacterItem from "./CharacterItem";

const List = ({ listItems, onCharacterSelect }) => {
  console.log(listItems);

  const renderedList = listItems.map((item) => {
    return <div>{item.name}</div>;
  });

  return (
    <div>
      <h3>List</h3>
      <ul>{renderedList}</ul>
    </div>
  );
};

export default List;
