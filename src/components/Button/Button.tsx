import 'src/components/Button/Button.scss'
import {HTMLProps} from 'react';


interface ButtonPropsType extends HTMLProps<HTMLButtonElement> {
    className?: string,
    disabled?:boolean,
    onClick? : () => void
}
const Button = ({className,disabled,onClick}:ButtonPropsType) => {
    return (
        <div className={className}>
        <button onClick={onClick} disabled={disabled} className={`glowing-btn ${disabled && 'disabled'}`}><span className='glowing-txt'>Д<span
            className='faulty-letter'>А</span>ЛЬШЕ</span>
        </button>
        </div>
    );
};

export default Button;