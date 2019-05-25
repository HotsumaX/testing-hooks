import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const RenderData = () => {
  return <div>test this out somewhere</div>;
};

const App = () => {
  const [data, setData] = useState({ url: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get(
          'https://hn.algolia.com/api/v1/search?query=redux'
        );
        console.log(results.data.hits[0].author);
        setData(results.data.hits);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log('this is my data', data);
  return (
    <div>
      here is something <RenderData />
      {data.length > 0 && data[0].url}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
