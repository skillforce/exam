import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppSlice, CalculationConditions} from '@/store/types/types';


const initialState = {
   isFirstStepSucceed:false,
   isSecondStepSucceed:false,
   calculationResultRow:''
} as AppSlice;

export const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        reset: () => initialState,
        changeIsFirstStepSucceed: (state,action:PayloadAction<boolean>) => {
            state.isFirstStepSucceed = action.payload;
        },
        changeIsSecondStepSucceed: (state,action:PayloadAction<boolean>) => {
            state.isSecondStepSucceed = action.payload;
        },
        changeCalculationResultRow: (state,action:PayloadAction<string>) => {
            state.calculationResultRow = action.payload;
        },

    },
});

export const {
    changeIsFirstStepSucceed,
    changeIsSecondStepSucceed,
    changeCalculationResultRow
} = appSlice.actions;
export default appSlice.reducer;