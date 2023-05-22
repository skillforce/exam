import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {FirstStep} from '@/store/types/types';


const initialState = {
    userName: '',
    phoneNumber: '',
    registerNumber: '',
    isUserNameSaved: false,
    isPhoneNumberSaved: false,
    isRegisterNumberSaved: false,
} as FirstStep;

export const firstStepSlice = createSlice({
    name: "firstStepSlice",
    initialState,
    reducers: {
        reset: () => initialState,
        changeUserName: (state,action:PayloadAction<string>) => {
            state.userName = action.payload;
        },
        changePhoneNumber: (state,action:PayloadAction<string>) => {
            state.phoneNumber = action.payload;
        },
        changeRegisterNumber: (state,action:PayloadAction<string>) => {
            state.registerNumber = action.payload;
        },
        saveUserName: (state) => {
            state.isUserNameSaved = true;
        },
        savePhoneNumber: (state) => {
            state.isPhoneNumberSaved = true;
        },
        saveRegisterNumber: (state) => {

            state.isRegisterNumberSaved = true;
        },

    },
});

export const {
    changeUserName,
    changePhoneNumber,
    changeRegisterNumber,
    saveUserName,
    savePhoneNumber,
    saveRegisterNumber,
    reset
} = firstStepSlice.actions;
export default firstStepSlice.reducer;