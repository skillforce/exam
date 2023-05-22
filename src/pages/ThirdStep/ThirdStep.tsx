import React from 'react';
import styles from './ThirdStep.module.scss';
import FormWrapper from '@/components/FormWrapper/FormWrapper';
import ArmadaGroupSvg from '@/components/ArmadaGroupSvg/armadaGroupSvg';
import SecondaryBtn from '@/components/SecondaryBtn/SecondaryBtn';
import {useAppSelector} from '@/store/hooks';
import {getIsFirstStepSucceed} from '@/store/app/appSelectors/getCalculatingResultRow';

const ThirdStep = () => {

    const resultRow = useAppSelector(getIsFirstStepSucceed)
    const onSecondaryBtnClick=()=>{
        window.location.reload()
    }


    return (
        <FormWrapper>
            <div className={styles.thirdStepHeaderTitle}>{resultRow}</div>
            <div className={styles.thirdStepHeaderTitle}>Спасибо Вам что решили доверить размещение Вашего бизнеса на
                территории
            </div>
            <ArmadaGroupSvg/>
            <SecondaryBtn onBtnClick={onSecondaryBtnClick}/>
        </FormWrapper>
    );
};

export default ThirdStep;