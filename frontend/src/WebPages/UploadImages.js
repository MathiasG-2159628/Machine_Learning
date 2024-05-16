import React, { useState } from 'react';

async function postImage(image) {
  try {
    
    const url = 'http://127.0.0.1:8000';
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data: image}),
    });

    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    throw error;
  }
}

export const Upload_Image = () => {
  const [image, setImage] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [moreDetails, setMoreDetails] = useState(null);

  // Function to handle file upload
  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        setImage(reader.result);
        setScanResult(null);
        setMoreDetails(null);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
  };
  // Function to handle scan button click
  const handleScanClick = () => {
    // Mocking scan result for demonstration
    postImage(image).then(function(result){
      console.log(result);
      var max = 0
      var details = ''
      var tool = ''
      for (var key in result) {
        if (result[key] > max) {
          max = result[key]
          tool = key
        }
         details += key + ': ' + (result[key] * 100).toFixed(2) + '%'
         if(key !== 'wrench') {
           details += '<br></br>'
         }
      }
      var output = 'The model thinks the image is a ' + tool + ' with ' + (max * 100).toFixed(2) + '% confidence.'
      setScanResult(output);
      setMoreDetails(details);
      console.log(details)
    });
  };

  return (
    <div className="container mt-2">
        <div className="row">
            <div className="col-12">
            <div className="card">
                <div className="card-header">
                <h1 className='my-4'>Image Recognition Model:</h1>
                {image && (
                    <img src={image} className='mb-4' alt="Uploaded image" style={{ maxWidth: '384px', maxHeight: '384px', minWidth: '384px', minHeight: '384px'}}/>
                )}
                </div>
                <div className="card-body">
                    <h2 className="mt-2">Upload Image</h2>
                    <div className="input-group mt-4 px-5">
                        <input type="file" className="form-control mx-5" aria-label="Upload" onChange={handleUpload} accept="image/*"/>
                    </div>
                </div>
                <div className="card-body d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100%' }}>
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <button id="analyse_button" className="btn btn-secondary btn-md mt-1" onClick={handleScanClick} hidden={image == null ? true : false} style={{ fontSize: '1.5rem', padding: '15px 30px' }}>
                      Analyse Image
                      </button>
                      {scanResult && <h4 className="mt-4 mx-4 pb-3">{scanResult}</h4>}
                      {moreDetails && 
                      <div className='mt-3'>
                        <p className="d-inline-flex gap-1">
                          <a type="button" data-bs-toggle="collapse" data-bs-target="#moreDetails" aria-expanded="false" aria-controls="moreDetails">More details</a>                    
                        </p>
                        <div className="collapse" id="moreDetails">
                          <div className="card card-body mt-2 mx-1" dangerouslySetInnerHTML={{ __html: moreDetails }}></div>
                        </div>
                      </div>
                      } 
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};