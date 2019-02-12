import React from 'react';
import Button from './Button';

const Operator = props => {
    return (
        <Button className="operator-button" name={props.symbol} />
    );
};

export default Operator; 

