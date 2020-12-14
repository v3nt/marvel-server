import React from "react";
import CharacterItem from "./CharacterItem";

const List = ({ listItems, onCharacterSelect }) => {
  if (!listItems) {
    return <div>Waiting for characters</div>;
  }
  const renderedList = listItems.map((item, i) => {
    return (
      <div key={i}>
        <CharacterItem {...item} onCharacterSelect={onCharacterSelect} />
      </div>
    );
  });

  return (
    <div>
      <h3>List</h3>
      <ul>{renderedList}</ul>
    </div>
  );
};

export default List;
