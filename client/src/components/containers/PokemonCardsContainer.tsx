import { FC, useState, useEffect } from "react";
import classes from "./pokemon-cards-container.module.css";
import { IPokemon } from "../../interfaces/IPokemon";
import PokemonCard from "../cards/PokemonCard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { config } from "../../constants/config";
import { updateGrid } from "../../store/slices/pokemonGridSlice";

const PokemonCardsContainer: FC = () => {
  const pokemonNavigation = useAppSelector((state) => state.pokemonNavigation);
  const pokemonInGrid = useAppSelector((state) => state.pokemonGrid);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchPokemonToDisplayInGrid = async () => {
      let temporaryPokemonInGrid: IPokemon[] = [];
      for (let i = pokemonNavigation.from; i <= pokemonNavigation.to; i++) {
        const response = await fetch(`${config.API_URL}/pokemon/${i}`);
        const responseData: IPokemon = await response.json();
        temporaryPokemonInGrid.push(responseData);
      }
      dispatch(updateGrid(temporaryPokemonInGrid));
    };

    fetchPokemonToDisplayInGrid();
  }, [pokemonNavigation.from, pokemonNavigation.to]);

  return (
    <div className={classes["pokemon-cards-container"]}>
      {pokemonInGrid.pokemons.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} key={pokemon.name} />;
      })}
    </div>
  );
};

export default PokemonCardsContainer;
