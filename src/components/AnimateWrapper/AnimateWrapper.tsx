import React, {ReactNode} from 'react';
import {Animate} from 'react-simple-animate';


interface AnimateWrapperProps {
    isShow:boolean,
    children :ReactNode
}
const AnimateWrapper = ({isShow,children}:AnimateWrapperProps) => {
    return (
        <Animate
            play={isShow}
            start={{opacity: 0, filter: 'blur(10px)'}}
            end={{opacity: 1, filter: 'blur(0)'}}
        >
            {children}
        </Animate>
    );
};

export default AnimateWrapper;