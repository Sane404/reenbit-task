import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CharacterInfo from "../components/CharacterInfo";
const CharacterPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    } else {
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
    }
  }, []);

  return (
    <div className="character-info">
      <Link to={`/homepage`}>GO Back</Link>
      <CharacterInfo props={character} />
    </div>
  );
};

export default CharacterPage;
