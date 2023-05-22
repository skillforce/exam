import './RadioBtn.scss'
import {ChangeEvent} from 'react';
interface RadioBtnProps{
    labelChecked:string,
    labelUnchecked:string,
    onChange:(newStatus:boolean)=>void,
    isChecked:boolean
}
const RadioBtn = ({labelChecked,labelUnchecked, onChange,isChecked}:RadioBtnProps) => {

    const onChangeRadioBtnValue =(e:ChangeEvent<HTMLInputElement>)=>{
        onChange(e.target.checked)
    }

    return (
        <div className={'radioBtnContainer'}>
            <label className="switch">
                <input type="checkbox" onChange={onChangeRadioBtnValue} checked={isChecked}/>
                    <span className="slider"></span>
            </label>
            <div className={'radioBtnContainerLabelBlock'}> {isChecked?labelChecked:labelUnchecked} </div>
        </div>
    );
};

export default RadioBtn;