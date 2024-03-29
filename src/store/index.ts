import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./redusers/appReduser";

export const store = configureStore({
    reducer: {
        app: appReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;