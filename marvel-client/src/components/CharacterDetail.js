import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";

const SECTIONS = ["comics", "series", "stories"];

const CharacterDetail = () => {
  const { id } = useParams();
  // custom hook. useCharacter.js
  const { isLoading, character } = useCharacter(id);
  const isArray = character instanceof Array;

  if (!isLoading && isArray === false) {
    console.log(character);
    const thumb =
      character.thumbnail.path +
      "/portrait_uncanny." +
      character.thumbnail.extension;
    return (
      <div className="character-info">
        <h2 className="title">{character.name}</h2>
        <img src={thumb} alt={character.name} />
        {SECTIONS.map((sec, i) => {
          return (
            <div key={i} className="character-sub-section {sec}">
              <h3 className="sub-title">
                {sec} {character[`${sec}`].available}
              </h3>
              <ul className="items-list ">
                {character[`${sec}`].items.map(({ name }, i) => {
                  return (
                    <li key={i} className="list-item">
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default CharacterDetail;
