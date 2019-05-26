import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Axios.get(
          'http://hn.algolia.com/api/v1/search?query=redux'
        );
        console.log(results);
        setData(results.data.hits);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return <div>something here {data.length > 0 && data[0].title}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
