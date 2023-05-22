import 'src/components/Select/Select.scss'
import {SelectListType} from '@/store/types/types';


export interface SelectPropsType {
    selectList:SelectListType[],
    specWord:string
    selectedId:number|null,
    onSelect:(id:number)=>void
}


const Select = ({selectList,selectedId,onSelect,specWord}:SelectPropsType) => {
    return (
        <div className="select" tabIndex={1}>
            {selectList.map(({id,label})=> {
                return id !== 6 ? <div onClick={() => onSelect(id)}>
                        <input className="selectopt"
                               name="selectInput"
                               type="radio"
                               id={`opt${id}${specWord}`}
                               checked={id === selectedId}/>
                        <label htmlFor={`opt${id}${specWord}`} className="option">{label}</label>
                    </div> :
                    <>
                    <input className="selectoptSpec"
                           name="selectInput"
                           type="radio"
                           id={`opt${id}${specWord}`}
                           checked={id === selectedId}/>
                <label htmlFor={`opt${id}${specWord}`} className={selectedId?'optionHidden':'option1'}>{label}</label>
                    </>

            })}
        </div>
    );
};

export default Select;