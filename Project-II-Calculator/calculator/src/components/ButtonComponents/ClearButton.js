import React from 'react';

const Clear = {
    name: "clear",
    symbol: "clear"
}; 

const ClearButton = props => {
    return (
        <button className="clear-button">
            {props.name}
        </button>
    );
};

export default ClearButton;

