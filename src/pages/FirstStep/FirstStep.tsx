'use client';
import React, {useMemo} from 'react';
import styles from './FirstStep.module.scss';
import Input from '@/components/Input/Input';
import {InputInfoObj} from '@/store/types/types';
import {
    changePhoneNumber,
    changeRegisterEmail,
    changeUserName,
    savePhoneNumber,
    saveRegisterNumber,
    saveUserName
} from '@/store/firstStep/firstStepSlice/firstStepSlice';
import {useAppSelector} from '@/store/hooks';
import {getPhoneNumber} from '@/store/firstStep/firstStepSelectors/getPhoneNumber';
import {getUserName} from '@/store/firstStep/firstStepSelectors/getUserName';
import {getRegisterEmail} from '@/store/firstStep/firstStepSelectors/getRegisterNumber';
import {useDispatch} from 'react-redux';
import Button from '@/components/Button/Button';
import {getIsSavedPhoneNumber} from '@/store/firstStep/firstStepSelectors/getIsSavedPhoneNumber';
import {getIsSavedUserName} from '@/store/firstStep/firstStepSelectors/getIsSavedUserName';
import {getIsSavedRegisterNumber} from '@/store/firstStep/firstStepSelectors/getIsSavedRegisterNumber';
import FormWrapper from '@/components/FormWrapper/FormWrapper';


interface FirstStepPropsType{
    nextStepCallBack?:()=>void
}
const FirstStep = ({nextStepCallBack}:FirstStepPropsType) => {

    const phoneNumber = useAppSelector(getPhoneNumber)
    const userName = useAppSelector(getUserName)
    const registerEmail = useAppSelector(getRegisterEmail)
    const isSavePhoneNumber = useAppSelector(getIsSavedPhoneNumber)
    const isSaveUserName = useAppSelector(getIsSavedUserName)
    const isSaveRegisterNumber = useAppSelector(getIsSavedRegisterNumber)
    const dispatch = useDispatch()


    const isNextStepBtnActive = isSavePhoneNumber && isSaveUserName && isSaveRegisterNumber





    const onNextStepClick = () => {
        if(isNextStepBtnActive) {
            nextStepCallBack?.()
        }
    };
    const firstStepTile: InputInfoObj[] = useMemo(() => {
        return [
            {
                id: 1,
                value: userName,
                onChange: (newValue: string) => dispatch(changeUserName(newValue)),
                btnSaveClick: () => dispatch(saveUserName()),
                titleText: 'Ваше имя',
                placeholderText: 'ФИО',
                regex: '[А-Яа-яA-Za-z ]{5,28}',
                type: 'text'
            },
            {
                id: 2,
                value: phoneNumber,
                onChange: (newValue: string) => dispatch(changePhoneNumber(newValue)),
                btnSaveClick: () => dispatch(savePhoneNumber()),
                titleText: 'Ваш номер телефона',
                placeholderText: '80 - XX - XXX - XX - XX',
                regex: '[8029]{1}[0-9]{10}',
                type: 'text'
            },
            {
                id: 3,
                value: registerEmail,
                onChange: (newValue: string) => dispatch(changeRegisterEmail(newValue)),
                btnSaveClick: () => dispatch(saveRegisterNumber()),
                titleText: 'Ваш email',
                placeholderText: 'xxxx@xxx.xxx',
                regex: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$',
                type: 'email'
            }
        ]
    }, [phoneNumber, userName, registerEmail])
    return (
        <FormWrapper>
            <div className={styles.formContainerHeaderLabel}> Мы рады видеть вас в рядах наших клиентов!</div>
            <div className={styles.formContainerHeaderLabel}> Введите необходимую информацию:</div>

            {firstStepTile.map(({
                                    id,
                                    value,
                                    onChange,
                                    titleText,
                                    placeholderText,
                                    type,
                                    btnSaveClick,
                                    regex
                                }) => {
                return <Input key={id}
                              id={id}
                              className={styles.inputBottomMargin}
                              btnSaveClick={btnSaveClick}
                              value={value}
                              setValue={onChange}
                              titleText={titleText}
                              regex={regex}
                              type={type}
                              placeholderText={placeholderText}
                />
            })}
            {isNextStepBtnActive && <Button onClick={onNextStepClick}
                                            className={styles.buttonBottomMargin}
                                            disabled={!isNextStepBtnActive}/>}
        </FormWrapper>
    );
};

export default FirstStep;