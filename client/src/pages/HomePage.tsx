import { FC, useState, useEffect } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchResult from "../components/search/SearchResult";
import PokemonCard from "../components/cards/PokemonCard";
import classes from "./home-page.module.css";
import { config } from "../constants/config";
import { IPokemon } from "../interfaces/IPokemon";
import CardNavigator from "../components/cards/CardNavigator";

const HomePage: FC = () => {
  const [searchBarInput, setSearchBarInput] = useState<string>("");
  const [allPokemonNames, setAllPokemonNames] = useState<string[]>([]);
  const [searchedPokemonResultNames, setSeaarchedPokemonResultNames] = useState<string[]>([]);
  const [pokemonDisplayRange, setPokemonDisplayRange] = useState<{ from: number; to: number }>({ from: 1, to: 12 });
  const [pokemonInGrid, setPokemonInGrid] = useState<IPokemon[]>([]);

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

  useEffect(() => {
    const fetchPokemonToDisplayInGrid = async () => {
      let temporaryPokemonInGrid: IPokemon[] = [];
      for (let i = pokemonDisplayRange.from; i <= pokemonDisplayRange.to; i++) {
        const response = await fetch(`${config.API_URL}/pokemon/${i}`);
        const responseData: IPokemon = await response.json();
        temporaryPokemonInGrid.push(responseData);
      }
      setPokemonInGrid(temporaryPokemonInGrid);
    };

    fetchPokemonToDisplayInGrid();
  }, [pokemonDisplayRange.from, pokemonDisplayRange.to]);

  const handleSearchBarInputChange = (inputText: string) => {
    setSearchBarInput(inputText);
  };

  const handleChangePageDisplayRange = (changeType: string) => {
    if (changeType === "next" && pokemonDisplayRange.to + 12 <= allPokemonNames.length) {
      setPokemonDisplayRange({
        from: pokemonDisplayRange.from + 12 >= 905 - 12 ? 905 - 11 : pokemonDisplayRange.from + 12,
        to: pokemonDisplayRange.to + 12 > 905 ? 905 : pokemonDisplayRange.to + 12,
      });
    }

    if (changeType === "first") {
      setPokemonDisplayRange({
        from: 1,
        to: 12,
      });
    }

    if (changeType === "last") {
      setPokemonDisplayRange({
        from: 905 - 11,
        to: 905,
      });
    }

    if (changeType === "previous" && pokemonDisplayRange.from - 12 >= 0) {
      setPokemonDisplayRange({
        from: pokemonDisplayRange.from - 12,
        to: pokemonDisplayRange.to - 12,
      });
    }
  };

  return (
    <div className={classes["home-page-container"]}>
      <div className={classes["home-page-search-container"]}>
        <SearchBar searchBarInputChangeHandler={handleSearchBarInputChange} searchBarInput={searchBarInput} />
        {searchBarInput.length > 0 ? <SearchResult results={searchedPokemonResultNames} /> : null}
      </div>
      <div className={classes["pokemon-cards-container"]}>
        {pokemonInGrid.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.name} />;
        })}
      </div>
      <div className={classes["pokemon-card-navigator-container"]}>
        <CardNavigator
          from={pokemonDisplayRange.from}
          to={pokemonDisplayRange.to}
          total={allPokemonNames.length}
          changeDisplayRangeHandler={handleChangePageDisplayRange}
        />
      </div>
    </div>
  );
};

export default HomePage;
