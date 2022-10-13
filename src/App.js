import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DataTable from './Components/DataTable';
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const data_url = ' https://data.cityofnewyork.us/resource/t29m-gskq.json';

  const getData = async () => {
    try {
      const { data } = await axios.get(data_url);
      setData(data);
      setLoading(true);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <h1>NYC Yellow Taxi Data</h1>
      {/* view source at Github */}
      <a href="https://github.com/manisaiprasad/Yello-Taxi-Data-Table">
        View Source at Github
      </a>
      {!error ? (
        loading ? (
          <DataTable data={data} />
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <p>Somthing went wrong..!</p>
      )}
    </div>
  );
}

export default App;
