import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Character = () => {
  const params = useParams();
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((data) => data.json())
      .then((c) => setCharacter(c));
  }, []);

  return <div>{character.name}</div>;
};

export default Character;
