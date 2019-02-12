import React from 'react';


const Button = (props) => {
    return (
        <div class="button">
        <button>{props.name}</button>
        </div>
    );
};

export default Button;
