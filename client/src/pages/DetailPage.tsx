import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IPokemon } from "../interfaces/IPokemon";
import classes from "./detail-page.module.css";
import { config } from "../constants/config";
import ImageDetail from "../components/details/ImageDetail";
import StatisticsDetail from "../components/details/StatisticsDetail";

const DetailPage: FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  const location: { key: any; hash: any; pathname: any; search: any; state: { name: string } } = useLocation();

  useEffect(() => {
    const getPokemonDetail = async (pokemonName: string) => {
      const response = await fetch(`${config.API_URL}/pokemon/${pokemonName}`);
      const responseData: IPokemon = await response.json();
      setPokemon(responseData);
      setIsDataLoaded(true);
    };

    getPokemonDetail(location.state.name);
  }, [location.state.name]);

  return (
    <div className={classes["detail-page"]}>
      {!isDataLoaded ? (
        <p>Loading... </p>
      ) : (
        <>
          <h4>{pokemon!.name}</h4>
          {[
            pokemon?.sprites.back_default,
            pokemon?.sprites.back_shiny,
            pokemon?.sprites.front_default,
            pokemon?.sprites.front_shiny,
          ].map((pokemonImage) => {
            return <ImageDetail key={pokemonImage} imageURL={pokemonImage === null ? null : pokemonImage!} />;
          })}

          <div className={classes["pokemon-types-container"]}>
            {pokemon!.types.map((type) => {
              return (
                <span
                  className={`${classes["pokemon-type"]} ${classes[`${type.type.name.trim().toLowerCase()}`]}`}
                  key={pokemon!.name + type.type.name}
                >
                  {type.type.name}
                </span>
              );
            })}
          </div>
          {/* <span>HEIGHT : {pokemon!.height} </span>
          <span>WEIGHT : {pokemon!.weight}</span> */}
          <StatisticsDetail stats={pokemon!.stats} name={pokemon!.name} />
        </>
      )}
    </div>
  );
};

export default DetailPage;
