import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {SecondStep} from '@/store/types/types';


const initialState = {
    selectedFloorId: null,
    selectedSquareId: null,
    selectedRadioBtnIds:[]
} as SecondStep;

export const secondStepSlice = createSlice({
    name: "secondStepSlice",
    initialState,
    reducers: {
        reset: () => initialState,
        changeSelectedFloorId: (state,action:PayloadAction<number>) => {
            state.selectedFloorId = action.payload;
        },
        changeSelectedSquareId: (state,action:PayloadAction<number>) => {
            state.selectedSquareId = action.payload;
        },
        changeSelectedRadioBtnIds: (state,action:PayloadAction<{id:string,isChecked:boolean}>) => {
           if(action.payload.isChecked) {
               state.selectedRadioBtnIds.push(action.payload.id);
           }else{
               state.selectedRadioBtnIds= state.selectedRadioBtnIds.filter(t=>t!==action.payload.id)
           }
        },
    },
});

export const {
    changeSelectedFloorId,
    changeSelectedSquareId,
    changeSelectedRadioBtnIds,
    reset
} = secondStepSlice.actions;
export default secondStepSlice.reducer;