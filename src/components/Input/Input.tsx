'use client';
import './Input.scss'
import clickIcon from '../../assets/img/clickIcon.png'
import Image from 'next/image';
import React, {ChangeEvent, HTMLProps, KeyboardEventHandler, useState} from 'react';

interface InputPropsType extends Omit<HTMLProps<HTMLInputElement>,'id'> {
    className?: string,
    value?: string,
    setValue?: (newValue: string) => void,
    btnSaveClick?: () => void,
    titleText?: string
    placeholderText?: string,
    regex?: string
    id:number

}

const Input = ({
                   className,
                   setValue,
                   value,
                   titleText,
                   regex,
                   type,
                   placeholderText,
                   id,
                   btnSaveClick
               }: InputPropsType) => {
    const [isClickIconVisible, setIsClickIconVisible] = useState(true)
    const onChangeRadioHandler = () => {
        setIsClickIconVisible(false)
    }

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue?.(e.target.value)
    }

    const onBtnClick = ()=>{
        btnSaveClick?.()
    }
    const onKeyDownCallBack = (e:any)=>{
        if(e.keyCode == 13) {
            e?.preventDefault()
        }
    }
    return (
        <div className={className}>
            <input className="c-checkbox" type="checkbox" id={`checkbox${id}`}/>
            <div className="c-formContainer">
                {isClickIconVisible &&
                    <Image src={clickIcon} alt="clickIcon" width={20} height={20} className={'inputImg'}/>}
                <form className="c-form" action="" onKeyDown={onKeyDownCallBack}>
                    <input className="c-form__input"
                           placeholder={placeholderText}
                           type={type || 'email'}
                           pattern={regex}
                           required
                           onChange={onChangeInputValue}
                           value={value}
                    />
                    <label className="c-form__buttonLabel" htmlFor={`checkbox${id}`} onClick={onBtnClick}>
                        <button className="c-form__button" type={'button'}>Save</button>
                    </label>
                    <label onClick={onChangeRadioHandler} className="c-form__toggle" htmlFor={`checkbox${id}`}
                           data-title={titleText}></label>
                </form>
            </div>
        </div>
    );
};

export default Input;