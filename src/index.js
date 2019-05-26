import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const RenderData = ({ data }) => {
  return data.map(item => {
    return (
      <div id={item.objectID}>
        Title: "{item.title}" and Author: "{item.author}"
      </div>
    );
  });
};

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios.get(
        'http://hn.algolia.com/api/v1/search?query=redux'
      );
      console.log(results.data.hits);
      setData(results.data.hits);
    };
    fetchData();
  }, []);

  return (
    <div>
      here is some stuff
      <br />
      {data.length > 0 && data[0].title}
      <RenderData data={data} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
