import { configureStore } from '@reduxjs/toolkit';
// import { userReducer } from "../features/user/userSlice";
// import { uiReducer } from "../features/ui/uiSlice";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

// const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        //user: persistedReducer,
        //ui: uiReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });