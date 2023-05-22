import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppSlice} from '@/store/types/types';


const initialState = {
   isFirstStepSucceed:false
} as AppSlice;

export const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        reset: () => initialState,
        changeIsFirstStepSucceed: (state,action:PayloadAction<boolean>) => {
            state.isFirstStepSucceed = action.payload;
        },

    },
});

export const {
    changeIsFirstStepSucceed,
    reset
} = appSlice.actions;
export default appSlice.reducer;