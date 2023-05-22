import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import appSlice from '@/store/app/appSlice/appSlice';
import firstStepSlice from '@/store/firstStep/firstStepSlice/firstStepSlice';
import secondStepSlice from '@/store/secondStep/secondStepSlice/secondStepSlice';

export const store = configureStore({
    reducer: {
        firstStepSlice,
        secondStepSlice,
        appSlice
    },
    devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;