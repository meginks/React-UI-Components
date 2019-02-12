import React from 'react';
import Number from './Number';
import Operator from './Operator';

// NUMBERS 
const ClearButton = {
    name: "clear",
    symbol: "clear"
};

const DivideButton = {
    name: "divide", 
    symbol: "&#247"
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

// NUMBERS 

const One = {
    number: 1
};
const Two = {
    number: 2
};
const Three = {
    number: 3
};
const Four = {
    number: 4
};
const Five = {
    number: 5
}
const Six = {
    number: 6
};
const Seven = {
    number: 7
};
const Eight = {
    number: 8
};
const Nine = {
    number: 9
};
const Zero = {
    number: 0
};

const NumberButtons = () =>
{
    return (
        <div className="numberPad">
        <div className="number-row">
        <Number number={Seven.number} />
        <Number number={Eight.number} />
        <Number number={Nine.number} />
        </div>
        <div className="number-row">
        <Number number={Four.number} />
        <Number number={Five.number} />
        <Number number={Six.number} />
        </div>
        <div className="number-row">
        <Number number={One.number} />
        <Number number={Two.number} />
        <Number number={Three.number} />
        </div>
        <div className="number-row">
        <Number number={Zero.number} />
        </div>
        </div>
    );
};

export default NumberButtons;