// @flow 
import * as React from 'react';
import './index.css';

export interface TitleProps {
    
};
const Title: React.FC<TitleProps> = (props) => {
    
    return (
        <h1 className="Title">
            {props.children}
        </h1>
    );
};

export default Title;