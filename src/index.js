import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

const RenderData = ({ data }) => {
  data.map(dat => {
    console.log(dat);
  });
  return null;
};

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Axios.get(
          'https://hn.algolia.com/api/v1/search?query=redux'
        );
        setData(results.data.hits);
        console.log(results.data.hits);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <RenderData data={data} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
