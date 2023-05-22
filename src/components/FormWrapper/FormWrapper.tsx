import React, {ReactNode} from 'react';
import styles from './FormWrapper.module.scss'


interface FormWrapperProps{
    children?:ReactNode
    className?:string
}

const FormWrapper = ({className,children}:FormWrapperProps) => {
    return (
        <div className={`${styles.formContainer} ${className && className}`}>
            {children}
        </div>
    );
};

export default FormWrapper;