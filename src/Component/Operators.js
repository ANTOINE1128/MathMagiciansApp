import React from 'react';
import PropTypes from 'prop-types';

const Operators = ({ handleClick }) => {
  const operators = ['÷', '+', '-', 'x', '='];

  return (
    <div className="operators">
      {operators.map((operator) => (
        <button className="btn-opp" type="button" key={operator} onClick={() => handleClick(operator)}>
          {operator}
        </button>
      ))}
    </div>
  );
};

Operators.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Operators;
