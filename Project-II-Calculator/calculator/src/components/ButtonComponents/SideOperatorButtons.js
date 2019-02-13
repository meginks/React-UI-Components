import React from 'react';
import Operator from './Operator';

// Operators 

const DivideButton = {
    name: "divide", 
    symbol: "/"
};

const MultiplyButton = {
    name: "multiply", 
    symbol: "x"
};

const SubtractButton = {
    name: "subtract",
    symbol: "-"
};

const AddButton = {
    name: "add",
    symbol: "+"
};

const EqualsButton = {
    name: "equals", 
    symbol: "="
};


const SideOperatorButtons = () => {
    return (
        <div className="operator-column">
        <Operator symbol={DivideButton.symbol} />
        <Operator symbol={MultiplyButton.symbol} />
        <Operator symbol={SubtractButton.symbol} />
        <Operator symbol={AddButton.symbol} />
        <Operator symbol={EqualsButton.symbol} /> 
        </div>
    );
};

export default SideOperatorButtons;
