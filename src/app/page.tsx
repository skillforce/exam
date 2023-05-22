'use client';

import styles from './page.module.css'
import Image from 'next/image';
import armadaImg from '../assets/img/atrium.webp'
import ArmadaGroupSvg from '@/components/ArmadaGroupSvg/armadaGroupSvg';
import FirstStep from '@/pages/FirstStep/FirstStep';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {
    changeCalculationResultRow,
    changeIsFirstStepSucceed,
    changeIsSecondStepSucceed
} from '@/store/app/appSlice/appSlice';
import {getIsFirstStepSucceed} from '@/store/app/appSelectors/getIsFirstStepSucceed';
import {useSelector} from 'react-redux';
import AnimateWrapper from '@/components/AnimateWrapper/AnimateWrapper';
import SecondStep from '@/pages/SecondStep/SecondStep';
import {getIsSecondStepSucceed} from '@/store/app/appSelectors/getIsSecondStepSucceed';
import ThirdStep from '@/pages/ThirdStep/ThirdStep';
import Fireworks from '@fireworks-js/react';
import {getSelectedSquareId} from '@/store/secondStep/secondStepSelectors/getSelectedSquareId';
import {getSelectedFloorId} from '@/store/secondStep/secondStepSelectors/getSelectedFloorId';
import {generateResultRow} from '@/helpers/generateResultRow';
import {getUserName} from '@/store/firstStep/firstStepSelectors/getUserName';
import {getSelectedRadioBtnIds} from '@/store/secondStep/secondStepSelectors/getSelectedRadioBtnIds';


const fireWorkPointsSetUp = {
    rocketsPoint: {
        min: 20,
        max: 200
    }
}
const fireWorkInlineStyleRightSide = {
    top: 0,
    left: 0,
    width: '35%',
    height: '100%',
    position: 'absolute',
    zIndex :99
}
const fireWorkInlineStyleLeftSide = {
    top: 0,
    left: '65%',
    width: '35%',
    height: '100%',
    position: 'absolute',
    zIndex :99
}

export default function Home() {
     const dispatch = useAppDispatch()
    const isFirstStepSucceed=useSelector(getIsFirstStepSucceed)
    const isSecondStepSucceed=useSelector(getIsSecondStepSucceed)

    const selectedSquareId = useAppSelector(getSelectedSquareId)
    const selectedFloorId = useAppSelector(getSelectedFloorId)
    const userName = useAppSelector(getUserName)
    const selectedRadioBtnIds = useAppSelector(getSelectedRadioBtnIds)

    const [isShowFirstStep,setIsShowFirstStep]=useState(false)
    const [isShowSecondStep,setIsShowSecondStep]=useState(false)
    const [isShowThirdStep,setIsShowThirdStep]=useState(false)


    useEffect(()=>{
        setTimeout(()=>{
            setIsShowFirstStep(true)

        },500)

    },[])

    useEffect(()=>{
        if(isFirstStepSucceed){
            setIsShowFirstStep(false)
            setTimeout(()=>{
                setIsShowSecondStep(true)
            },500)
        }
    },[isFirstStepSucceed])
    useEffect(()=>{
        if(isFirstStepSucceed){
            setIsShowSecondStep(false)
            setTimeout(()=>{
                setIsShowThirdStep(true)
            },500)
        }
    },[isSecondStepSucceed])

    const firstStepNextStepClick = ()=>{
        dispatch(changeIsFirstStepSucceed(true))
    }
    const secondStepNextStepClick = ()=>{
        dispatch(changeIsSecondStepSucceed(true))
        dispatch(changeCalculationResultRow(generateResultRow(userName,selectedSquareId,selectedFloorId,selectedRadioBtnIds)))
    }



    return (
        <main className={styles.main}>
            {isShowThirdStep && <Fireworks
                options={fireWorkPointsSetUp}
                style={fireWorkInlineStyleRightSide as any}
            />}
            <Image src={armadaImg}
                   alt={'mainPageBackground'}
                   fill
                   placeholder="blur"
                   style={{filter: 'blur(2px)', position: 'absolute'}}
                   quality={90}/>
            <div className={styles.headerLabel}>
                <ArmadaGroupSvg/>
            </div>
            {isShowFirstStep &&<AnimateWrapper isShow={isShowFirstStep}>
                <FirstStep nextStepCallBack={firstStepNextStepClick}/>
            </AnimateWrapper>}
            {isShowSecondStep && <AnimateWrapper isShow={isShowSecondStep}>
                <SecondStep nextStepCallBack={secondStepNextStepClick} />
            </AnimateWrapper>}
            {isShowThirdStep && <AnimateWrapper isShow={isShowThirdStep}>
                <ThirdStep/>
            </AnimateWrapper>}
            {isShowThirdStep && <Fireworks
                options={fireWorkPointsSetUp}
                style={fireWorkInlineStyleLeftSide as any}
            />}

        </main>
    )
}
