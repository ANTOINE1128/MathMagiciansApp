import React from 'react';
import PropTypes from 'prop-types';

const Numbers = ({ handleClick }) => {
  const num = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  return (
    <div className="number">
      <div className="other-opp ">
        <button type="button" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" onClick={() => handleClick('%')}>%</button>
      </div>
      {num.map((num) => (

        <button key={num} type="button" onClick={() => handleClick(num.toString())}>
          {num}
        </button>
      )) }
      <div className="zero">
        <button type="button" onClick={() => handleClick('0')}>0</button>
        <button type="button" onClick={() => handleClick('.')}>.</button>
      </div>
    </div>

  );
};
Numbers.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default Numbers;
