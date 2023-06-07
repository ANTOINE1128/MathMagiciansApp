import { useState } from 'react';
import Screen from './Screen';
import Numbers from './Numbers';
import Operators from './Operators';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcData, setCalcData] = useState({
    total: null,
    
  });
  const handleClick = (buttonName) => {
    const newData = calculate(calcData, buttonName);
    setCalcData(newData);
  };
  return (
    <div className="calculator-container">
      <div className="calculator">
        <Screen display={calcData.next || calcData.total || '0'} />
        <div className="num-opp">
          <Numbers handleClick={handleClick} />
          <Operators handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
export default Calculator;
