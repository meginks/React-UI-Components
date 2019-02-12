import React from 'react';
import Display from './components/DisplayComponents/Display';
import ClearButton from './components/ButtonComponents/ClearButton';
import NumberButtons from './components/ButtonComponents/NumberButtons';
import SideOperatorButtons from './components/ButtonComponents/SideOperatorButtons';

const App = () => {
  return (
    <div class="calculator-box">
    <Display />
    <div className="button-box">
    <div className="left-half">
    <ClearButton className="clear-button" />
    <NumberButtons className="number-box" />
    </div>
    <div className="right-half">
    <SideOperatorButtons className="operator-box" />
    </div>
    </div>
    </div>
  );
};

export default App;
