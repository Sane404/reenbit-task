import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CharacterInfo from "../components/CharacterInfo";
import useFetchCustom from "../functions/useFetchCustom";
const CharacterPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const URL = `https://rickandmortyapi.com/api/character/${params.id}`;
  const [character] = useFetchCustom(URL);
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
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
