import React from 'react';

const Operator = props => {
    return (
        <button className="operator-button">
            {props.symbol}
        </button>
    );
};

export default Operator; 

