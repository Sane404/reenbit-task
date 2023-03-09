import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Character from "../components/Character";
const HomePage = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState(
    JSON.parse(localStorage.getItem("search_query")) || ""
  );
  useEffect(() => {
    //if user didn't login redirect
    if (!localStorage.getItem("user")) {
      navigate("/");
    } else {
      fetch("https://rickandmortyapi.com/api/character")
        .then((data) => data.json())
        .then((ch) => {
          let sorted = ch.results.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
          setCharacters(sorted);
        });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("search_query", JSON.stringify(query));
  }, [query]);

  return (
    <div className="homepage">
      <img
        className="logo"
        alt="Rick and Morty banner"
        src="/homepage_banner.svg"
      />
      <input
        type="search"
        className="filter"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="characters">
        {characters
          .filter((item) => {
            return item.name.toLowerCase().includes(query.toLowerCase());
          })
          .map((ch) => {
            return <Character props={ch} key={ch.id} />;
          })}
      </div>
    </div>
  );
};

export default HomePage;
