import React from 'react';
import Display from './components/DisplayComponents/Display';
import ClearButton from './components/ButtonComponents/ClearButton';
import NumberButtons from './components/ButtonComponents/NumberButtons';
import SideOperatorButtons from './components/ButtonComponents/SideOperatorButtons';
import './css/index.css';
const App = () => {
  return (
    <div class="calculator-box">
    <Display />
    <div className="button-box">
    <div className="number-side">
    <ClearButton className="clear-button" />
    <NumberButtons />
    </div>
    <div className="operator-side">
    <SideOperatorButtons />
    </div>
    </div>
    </div>
  );
};

export default App;
