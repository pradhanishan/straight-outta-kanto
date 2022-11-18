import { createSlice } from "@reduxjs/toolkit";

export interface IPokemonNavigationState {
  from: number;
  to: number;
}

const initialState: IPokemonNavigationState = {
  from: 1,
  to: 12,
};

export const pokemonNavigationSlice = createSlice({
  name: "pokemonCardNavigation",
  initialState,
  reducers: {
    increment: (state: IPokemonNavigationState) => {
      let from = state.from;
      if (from + 12 >= 905 - 12) {
        state.from = 905 - 11;
        state.to = 905;
      } else {
        state.from += 12;
        state.to += 12;
      }
    },
    decrement: (state: IPokemonNavigationState) => {
      let from = state.from;
      if (from - 12 < 1) {
        state.from = 1;
        state.to = 12;
      } else {
        state.from -= 12;
        state.to -= 12;
      }
    },
    resetToFirst: (state: IPokemonNavigationState) => {
      state.from = 1;
      state.to = 12;
    },
    resetToLast: (state: IPokemonNavigationState) => {
      state.from = 905 - 11;
      state.to = 905;
    },
  },
});

export const { increment, decrement, resetToFirst, resetToLast } = pokemonNavigationSlice.actions;

export default pokemonNavigationSlice;
