const Operators = () => {
  const operator = ['÷', '+', '-', 'X', '='];

  return (
    <div className="operators">
      {operator.map((operators) => (
        <button className="btn-opp" type="button" key={operators}>
          {operators}
        </button>
      ))}
    </div>
  );
};

export default Operators;
