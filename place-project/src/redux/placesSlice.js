import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const placesSlice = createSlice({
  name: "places",
  initialState: data,
  reducers: {
    markAsVisited: (state, action) => {
      const place = state.find((item) => item.id === action.payload);
      if (place) {
        place.visited = true;
      }
    },
    unmarkAsVisited: (state, action) => {
      const place = state.find((item) => item.id === action.payload);
      if (place) {
        place.visited = false;
      }
    },
  },
});

export const { markAsVisited, unmarkAsVisited } = placesSlice.actions;
export default placesSlice.reducer;
