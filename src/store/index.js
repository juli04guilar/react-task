import { createSlice, configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "../reducer";

export const taskSlice = createSlice({
  name: "task",
  reducers: taskReducer,
  initialState: {},
});

const setupStore = (preloadedState) =>
  configureStore({
    reducer: taskSlice.reducer,
    preloadedState,
  });

export { setupStore };
