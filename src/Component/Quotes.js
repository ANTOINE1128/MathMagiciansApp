import React, { useEffect, useState } from 'react';

function Quotes() {
  const [fetchData, SetFechedData] = useState([]);
  const [dataLoading, SetDataLoad] = useState(false);
  const [errorLoad, SetErrorLoad] = useState(false);

  // fetch data
  useEffect(() => {
    const loadData = async () => {
      SetDataLoad(true);

      try {
        const fetchQuote = await fetch('https://api.api-ninjas.com/v1/quotes?limit=1', {
          method: 'GET',
          headers: { 'X-Api-Key': 'JBqUI+OJghdj6tMuxMCPkw==iytRIlFUQeiKleIN' },

        });
        const data = await fetchQuote.json();

        SetFechedData(data);
      } catch (error) {
        SetErrorLoad(true);
      }
      SetDataLoad(false);
    };
    loadData();
  }, [SetFechedData, SetErrorLoad, SetDataLoad]);

  if (dataLoading) {
    return <div className="loading">Loading...</div>;
  }
  if (errorLoad) {
    return <div className="error">please try again after 5 hours</div>;
  }
  return (
    <div className="quote-container">
      { fetchData.map((data) => (
        <p className="quote" key={data.quote}>
          {data.quote}
        </p>
      ))}
    </div>
  );
}

export default Quotes;
