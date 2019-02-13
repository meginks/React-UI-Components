import React from 'react';
import Number from './Number';

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
    name: 7,
    number: 7
};
const Eight = {
    name: 8,
    number: 8
};
const Nine = {
    name: 9,
    number: 9
};
const Zero = {
    name: 0,
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
                <Number class="zero-button" number={Zero.number} />
            </div>
        </div>
    );
};

export default NumberButtons;