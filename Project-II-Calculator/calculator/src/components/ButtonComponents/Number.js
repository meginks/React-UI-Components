import React from 'react';
import Button from './Button';

const Number = props => {
    return (
        <div className="number-button">
        <Button number={props.number} />
        </div>
    );
};

export default Number; 
