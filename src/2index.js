import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const GetData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get(
          'https://hn.algolia.com/api/v1/search?query=redux'
        );
        console.log(results);
        setData(results.data.hits[0].author);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return <div> {data}</div>;
};

const App = () => {
  return (
    <div>
      <GetData />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
