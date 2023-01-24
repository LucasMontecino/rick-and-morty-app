import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setinfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const getCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => error.message);
  };

  const onPrevious = () => {
    getCharacters(info.prev);
  };

  const onNext = () => {
    getCharacters(info.next);
  };

  useEffect(() => {
    getCharacters(initialUrl);
  }, []);

  return (
    <>
      <NavBar brand="Rick & Morty App" />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div className="container mt-5">
        <Characters characters={characters} />
      </div>
    </>
  );
}

export default App;
