import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import DataTable from './Components/DataTable';
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const data_url = ' https://data.cityofnewyork.us/resource/t29m-gskq.json';
  const getData = async () => {
    try {
      const { data } = await axios.get(data_url);
      console.log(data);
      setData(data);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  getData();

  return (
    <div className="App">
      <h1>NYC Yellow Taxi Data</h1>
      {loading ? <DataTable data={data} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
