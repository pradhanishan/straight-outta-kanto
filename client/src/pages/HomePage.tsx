import { FC, useState, useEffect } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchResult from "../components/search/SearchResult";
import classes from "./home-page.module.css";
import { config } from "../constants/config";

const HomePage: FC = () => {
  const [searchBarInput, setSearchBarInput] = useState<string>("");
  const [allPokemonNames, setAllPokemonNames] = useState<string[]>([]);
  const [searchedPokemonResultNames, setSeaarchedPokemonResultNames] = useState<string[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");

  // fetch list of all pokemon from server
  useEffect(() => {
    const fetchAllPokemonData = async () => {
      const response = await fetch(`${config.API_URL}/pokemon?limit=100000&offset=0`);
      const responseData: { count: number; next: any; previous: any; results: { name: string; url: string }[] } =
        await response.json();
      setAllPokemonNames(responseData.results.map((result) => result.name));
    };

    fetchAllPokemonData();
  }, []);

  //fetch list of top 10 pokemon that start with entered name
  useEffect(() => {
    setSeaarchedPokemonResultNames(
      allPokemonNames
        .filter((pokemonName) => pokemonName.toLowerCase().startsWith(searchBarInput.toLowerCase()))
        .slice(0, 10)
    );
  }, [searchBarInput]);

  const handleSearchBarInputChange = (inputText: string) => {
    setSearchBarInput(inputText);
  };

  const handleSelectPokemon = (selectedPokemonName: string) => {
    setSelectedPokemon(selectedPokemonName);
  };

  return (
    <div className={classes["home-page-container"]}>
      <SearchBar searchBarInputChangeHandler={handleSearchBarInputChange} searchBarInput={searchBarInput} />
      {searchBarInput.length > 0 ? (
        <SearchResult results={searchedPokemonResultNames} selectPokemonNameHandler={handleSelectPokemon} />
      ) : null}
    </div>
  );
};

export default HomePage;
