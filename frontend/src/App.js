import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {Purpose_Authors} from './WebPages/PurposeAuthors.js';
import {Upload_Image} from './WebPages/UploadImages.js';
import {Dataset_ClassifierDetails} from './WebPages/DatasetClassifierDetails.js';


function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  useEffect(() => {
    setActiveComponent(<Purpose_Authors/>)
    }, []);

  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand ms-4 me-4">Machine learning</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item me-4">
              <button className="nav-link btn btn-outline-light"
              onClick={() =>{setActiveComponent(<Purpose_Authors/>)}}
              >Purpose & Authors</button>
            </li>
            <li className="nav-item me-4">
              <button className="nav-link btn btn-outline-light" 
              onClick={() =>{setActiveComponent(<Upload_Image/>)}}
              >Image recognition model</button>
            </li>
            <li className="nav-item me-4">
              <button className="nav-link btn btn-outline-light" 
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
