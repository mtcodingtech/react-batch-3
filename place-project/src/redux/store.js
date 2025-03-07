import { configureStore } from "@reduxjs/toolkit";
import PlacesReducer from "./placesSlice";

export const store = configureStore({
  reducer: {
    places: PlacesReducer,
  },
});
