import React from 'react';
import FormWrapper from '@/components/FormWrapper/FormWrapper';
import Select from '@/components/Select/Select';
import {SelectListType} from '@/store/types/types';
import {getSelectedSquareId} from '@/store/secondStep/secondStepSelectors/getSelectedSquareId';
import {getSelectedFloorId} from '@/store/secondStep/secondStepSelectors/getSelectedFloorId';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {
    changeSelectedFloorId,
    changeSelectedRadioBtnIds,
    changeSelectedSquareId
} from '@/store/secondStep/secondStepSlice/secondStepSlice';
import styles from './SecondStep.module.scss'
import RadioBtn from '@/components/RadioBtn/RadioBtn';
import {getSelectedRadioBtnIds} from '@/store/secondStep/secondStepSelectors/getSelectedRadioBtnIds';
import Button from '@/components/Button/Button';

export interface SecondStepData {
    squareData: {
        squareSelectOptions: SelectListType[],
        specWord: string
    }
    floorData: {
        floorSelectOptions: SelectListType[],
        specWord: string
    }
    radioBtnConditionList: {
        id: string,
        labelChecked: string,
        labelUnchecked: string,
        isChecked: boolean,
        onChange:(newStratus:boolean)=>void
    }[]
}
interface SecondStepPropsType {
    nextStepCallBack?:()=>void
}
const SecondStep = ({nextStepCallBack}:SecondStepPropsType) => {

    const selectedSquareId = useAppSelector(getSelectedSquareId)
    const selectedFloorId = useAppSelector(getSelectedFloorId)
    const selectedRadioBtnIds = useAppSelector(getSelectedRadioBtnIds)
    const isNextStepBtnActive=selectedSquareId && selectedFloorId

    const dispatch = useAppDispatch()

    const onChangeRadioBtnStatus = (id: string, value: boolean) => {
        dispatch(changeSelectedRadioBtnIds({id, isChecked: value}))
    }
    const secondStepData: SecondStepData = {
        squareData: {
            squareSelectOptions: [
                {id: 1, label: '10-15м²'},
                {id: 2, label: '16-30м²'},
                {id: 3, label: '30-50м²'},
                {id: 4, label: '50-70м²'},
                {id: 5, label: '70-100м²'},
                {id: 6, label: 'Выберите площадь'}
            ],
            specWord: 'square'
        },
        floorData: {
            floorSelectOptions: [
                {id: 1, label: '-1 этаж'},
                {id: 2, label: '1 этаж'},
                {id: 3, label: '2 этаж'},
                {id: 4, label: '3 этаж'},
                {id: 5, label: '4-7 этаж'},
                {id: 6, label: 'Выберите этаж'}
            ],
            specWord: 'floor'
        },
        radioBtnConditionList: [
            {
                id: '1radio',
                labelChecked: 'С предоставлением мебели',
                labelUnchecked: 'Без предоставлением мебели',
                isChecked: selectedRadioBtnIds.indexOf('1radio') !== -1,
                onChange: (value: boolean) => onChangeRadioBtnStatus('1radio', value)
            },
            {
                id: '2radio',
                labelChecked: 'С предоставлением парковки',
                labelUnchecked: 'Без предоставлением парковки',
                isChecked: selectedRadioBtnIds.indexOf('2radio') !== -1,
                onChange: (value: boolean) => onChangeRadioBtnStatus('2radio', value)
            },
            {
                id: '3radio',
                labelChecked: 'С предоставлением обслуживания помещения',
                labelUnchecked: 'Без предоставления обслуживания помещения',
                isChecked: selectedRadioBtnIds.indexOf('3radio') !== -1,
                onChange: (value: boolean) => onChangeRadioBtnStatus('3radio', value)
            }
        ]
    }
    const onSelectFloor = (id: number) => {
        dispatch(changeSelectedFloorId(id))
    }
    const onSelectSquare = (id: number) => {
        dispatch(changeSelectedSquareId(id))
    }
    const onNextStepClick = () => {
        if (isNextStepBtnActive) {
            nextStepCallBack?.()
        }
    }

    return (
        <FormWrapper className={styles.additionalContainerClass}>
            <div className={styles.formContainerHeaderLabel}> Введите необходимую информацию:</div>
            <div className={styles.secondStepContentContainer}>
                <Select specWord={secondStepData.squareData.specWord}
                        selectList={secondStepData.squareData.squareSelectOptions}
                        onSelect={onSelectSquare}
                        selectedId={selectedSquareId}/>
                <Select specWord={secondStepData.floorData.specWord}
                        selectList={secondStepData.floorData.floorSelectOptions}
                        onSelect={onSelectFloor}
                        selectedId={selectedFloorId}/>
            </div>
            <div className={styles.formContainerHeaderLabelSecondary}>Дополнительные параметры(необязательно):</div>
            <div className={styles.secondStepContentContainer}>
                {secondStepData.radioBtnConditionList.map(({labelUnchecked,labelChecked, id, isChecked,onChange}) => (
                    <RadioBtn labelUnchecked={labelUnchecked}
                              labelChecked={labelChecked}
                              onChange={onChange}
                              key={id}
                              isChecked={isChecked}/>
                ))}
            </div>
            {isNextStepBtnActive && <Button onClick={onNextStepClick}
                                            className={styles.buttonBottomMargin}
                                            disabled={!isNextStepBtnActive}/>}
        </FormWrapper>
    );
};

export default SecondStep;