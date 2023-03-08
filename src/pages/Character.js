import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Character = () => {
  const params = useParams();
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((data) => data.json())
      .then((c) => {
        let { gender, name, status, image, species, type } = c;
        if (type === "") type = "Unknown"; // some characters have empty string as type so I chose to do this
        let { name: origin } = c.origin;
        const characterObj = {
          name,
          image,
          info: [
            {
              title: "Gender",
              description: gender,
            },
            {
              title: "Status",
              description: status,
            },
            {
              title: "Specie",
              description: species,
            },
            {
              title: "Type",
              description: type,
            },
            {
              title: "Origin",
              description: origin,
            },
          ],
        };
        setCharacter(characterObj);
      });
  }, []);

  return (
    <div className="character-info">
      <Link to={`/homepage`}>GO Back</Link>
      <img
        className="character-info__image"
        src={character.image}
        alt={character.name}
      />
      <h2 className="character-info__name">{character.name}</h2>
      <h3>Informations</h3>
      {character.info?.map((item) => {
        return (
          <div className="character-info__wrap">
            <b className="character-info__title">{item.title}</b>
            <p className="character-info__description">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Character;
