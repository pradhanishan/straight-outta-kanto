import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPokemon } from "../../interfaces/IPokemon";

export interface IPokemonGridState {
  pokemons: IPokemon[];
}

const initialState: IPokemonGridState = {
  pokemons: [],
};

export const pokemonGridSlice = createSlice({
  name: "pokemonGrid",
  initialState,
  reducers: {
    updateGrid: (state, action: PayloadAction<IPokemon[]>) => {
      state.pokemons = action.payload;
    },
  },
});

export const { updateGrid } = pokemonGridSlice.actions;

export default pokemonGridSlice;
