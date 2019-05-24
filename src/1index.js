import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const GetData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get(
          'http://hn.algolia.com/api/v1/search?query=redux'
        );
        setData(results.status);
        console.log(results);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  });

  return <div>something goes here {data}</div>;
};

const App = () => {
  return (
    <div>
      <GetData />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
