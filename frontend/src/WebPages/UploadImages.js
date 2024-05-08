import React, { useState } from 'react';

async function postImage(image) {
  try {
    
    const url = 'http://127.0.0.1:8000';
    console.log(image)
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

  // Function to handle file upload
  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        setImage(reader.result);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
  };
  // Function to handle scan button click
  const handleScanClick = () => {
    // Mocking scan result for demonstration
    var prediction = postImage(image);
    const result = "The model says the image is 100% Denzell!";
    setScanResult(result);
  };

  return (
    <div className="container mt-2">
        <h2 className='mb-4'>Image Recognition Model:</h2>
        <div className="row">
            <div className="col-12">
            <div className="card">
                <div className="card-header">
                {image && (
                    <img src={image} alt="Uploaded" style={{ maxWidth: '512px', maxHeight: '512px', minWidth: '512px', minHeight: '512px'}}/>
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
                        <button id="analyse_button" className="btn btn-secondary btn-lg mt-1" onClick={handleScanClick} hidden={image == null ? true : false} style={{ fontSize: '1.5rem', padding: '15px 30px' }}>
                        Analyse Image
                        </button>
                        {scanResult && <h2 className="mt-4 ms-4 pb-3">{scanResult}</h2>}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};