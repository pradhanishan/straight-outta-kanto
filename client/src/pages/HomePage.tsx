import { FC, useState, useEffect } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchResult from "../components/search/SearchResult";
import classes from "./home-page.module.css";
import { config } from "../constants/config";

const HomePage: FC = () => {
  const [allPokemonNames, setAllPokemonNames] = useState<string[]>([]);

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

  return (
    <div className={classes["home-page-container"]}>
      <SearchBar />
      <SearchResult />
    </div>
  );
};

export default HomePage;
