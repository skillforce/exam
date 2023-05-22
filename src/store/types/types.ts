import {secondStepSlice} from '@/store/secondStep/secondStepSlice/secondStepSlice';

export type FirstStep = {
    userName: string;
    phoneNumber: string;
    registerEmail: string;
    isUserNameSaved: boolean,
    isPhoneNumberSaved: boolean,
    isRegisterNumberSaved: boolean,
};
export type SecondStep = {
    selectedFloorId: number|null,
    selectedSquareId: number|null,
    selectedRadioBtnIds:string[]
};
export type AppSlice = {
    isFirstStepSucceed:boolean
    isSecondStepSucceed:boolean
    calculationResultRow:string
};

export interface CalculationConditions{
    base?:number,
    square:null|number,
    floor:null|number,
    isWithFurniture:boolean,
    isWithParkingLot:boolean,
    isWithServices:boolean
    userName:string
}
export interface StateSchema{
    firstStepSlice:FirstStep
    secondStepSlice:SecondStep
    appSlice:AppSlice
}

export interface InputInfoObj {
    id:number,
    value:string
    onChange:(newValue:string)=>void,
    btnSaveClick:()=>void,
    titleText:string
    placeholderText:string
    regex:string,
    type:string
}

export interface SelectListType {
    id:number,
    label:string,
}