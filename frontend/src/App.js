import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

async function getData() {
  try {
    const url = 'http://127.0.0.1:8000/';
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    throw error;
  }
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setData(data);
      } catch (error) {
        // Handle error
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
        <p>
          {data ? JSON.stringify(data) : 'Loading...'}
        </p>
    </div>
  );
}

export default App;
