import { configureStore } from "@reduxjs/toolkit";
import { pokemonNavigationSlice } from "./slices/pokemonCardNavigationSlice";
import pokemonGridSlice from "./slices/pokemonGridSlice";

export const store = configureStore({
  reducer: {
    pokemonNavigation: pokemonNavigationSlice.reducer,
    pokemonGrid: pokemonGridSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
