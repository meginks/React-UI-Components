import React from 'react';
import Button from './Button';

const Number = props => {
    return (
        <Button className="number-button" name={props.number} />
    );
};

export default Number; 
