import { configureStore } from "@reduxjs/toolkit";
import { translateApi } from "../services/translateApi";
export default configureStore({
  reducer: {
    [translateApi.reducerPath]: translateApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(translateApi.middleware),
});
