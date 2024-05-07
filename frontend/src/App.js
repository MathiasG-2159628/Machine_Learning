import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {Purpose_Authors} from './WebPages/PurposeAuthors.js';
import {Upload_Image} from './WebPages/UploadImages.js';
import {Dataset_ClassifierDetails} from './WebPages/DatasetClassifierDetails.js';

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
  const [activeComponent, setActiveComponent] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setActiveComponent(<Purpose_Authors/>)
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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand ms-4 me-4">Machine learning</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item me-4">
              <button class="nav-link btn btn-outline-light"
              onClick={() =>{setActiveComponent(<Purpose_Authors/>)}}
              >Purpose & Authors</button>
            </li>
            <li class="nav-item me-4">
              <button class="nav-link btn btn-outline-light" 
              onClick={() =>{setActiveComponent(<Upload_Image/>)}}
              >Upload Image</button>
            </li>
            <li class="nav-item me-4">
              <button class="nav-link btn btn-outline-light" 
              onClick={() =>{setActiveComponent(<Dataset_ClassifierDetails/>)}}
              >Dataset & Classifier Details</button>
            </li>
          </ul>
        </div>
      </nav>
      <div className='activecomponent'>
        {activeComponent}
      </div>
    </div>
  );
}

export default App;
