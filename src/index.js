import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

const RenderData = ({ data }) => {
  return data.map((dat, idx) => {
    if (idx > 4) return;

    return (
      <section>
        <h4>Item {idx + 1}</h4>
        {Object.entries(dat).map((key, value) => {
          return <p>{`${key}:  ${value}`}</p>;
        })}
      </section>
    );

    // (
    //   <div key={dat.objectID}>
    //     {dat.author} &nbsp; {dat.points} &nbsp; {dat.url}
    //   </div>
    // );
  });
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
