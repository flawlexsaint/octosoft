import { configureStore } from "@reduxjs/toolkit";
import ApplicationState from "./reducers/app-reducer";

export const store = configureStore({
  reducer: {
    appstate: ApplicationState,
  },
});
