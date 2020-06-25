// @flow 
import * as React from 'react';

/*interface TextFieldProps {
    InputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    LabelProps: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
}*/

interface TextFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    labelText?: string;
}

interface LabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>{

}

const TextField:React.FC<TextFieldProps> = (props) => {
    const {labelText, ...inputProps} = props;

    const labelProps: LabelProps = {
        ...(inputProps.id && {htmlFor: inputProps.id})
    }
    
    return (
        <p>
           { labelText && <label {...labelProps}>{labelText}</label> }
           <input {...inputProps}/>
        </p>
    );
};

export default TextField;