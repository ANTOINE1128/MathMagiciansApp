import Screen from './Screen';
import Numbers from './Numbers';
import Operators from './Operators';

const Calculator = () => (
  <div className="calculator-container">
    <div className="calculator">
      <Screen />
      <div className="num-opp">
        <Numbers />
        <Operators />
      </div>
    </div>
  </div>
);

export default Calculator;
