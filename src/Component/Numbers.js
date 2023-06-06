const Numbers = () => {
  const num = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  return (
    <div className="number">
      <div className="other-opp">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
      </div>
      {num.map((num) => (

        <button key={num} type="button">
          {num}
        </button>
      )) }
      <div className="zero">
        <button type="button">0</button>
        <button type="button">.</button>
      </div>
    </div>

  );
};

export default Numbers;
