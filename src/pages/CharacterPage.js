import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CharacterInfo from "../components/CharacterInfo";
import useFetchCustom from "../functions/useFetchCustom";
import "./CharacterPage.css";
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
    <>
      <Link to={`/homepage`} className="back-btn">
        <img src="/back-arrow.svg" alt="go back" className="btn-svg" />
        <b className="link-text">GO Back</b>
      </Link>
      <CharacterInfo props={character} />
    </>
  );
};

export default CharacterPage;
