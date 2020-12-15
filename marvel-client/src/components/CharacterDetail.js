import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";

const CharacterDetail = () => {
  const { id } = useParams();
  // custom hook. useCharacter.js
  const { isLoading, character } = useCharacter(id);
  const isArray = character instanceof Array;

  if (!isLoading && isArray === false) {
    console.log("isLoading", isArray);
    const thumb =
      character.thumbnail.path +
      "/portrait_uncanny." +
      character.thumbnail.extension;
    return (
      <div>
        <h2 className="ui header">{character.name}</h2>
        <img src={thumb} />
        <div className="ui segment">{character.comics.available}</div>
        <div className="ui segment">{character.series.available}</div>
        <div className="ui segment">{character.stories.available}</div>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default CharacterDetail;
