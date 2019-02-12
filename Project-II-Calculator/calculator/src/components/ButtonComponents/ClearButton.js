import React from 'react';
import Button from './Button';


const Clear = {
    name: "clear",
    symbol: "clear"
}; 

const ClearButton = () => {
    return (
        <Button className="clear-button" name={Clear.name} />
    );
};

export default ClearButton;

