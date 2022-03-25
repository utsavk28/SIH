import React, { Component }  from 'react';

import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

import "../assets/template1.css";


const fileTypes = ["JPEG", "PNG", "MP4"];

const Upload= ()=> {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="sahil1">
      <h1>Hello To Drag & Drop Files</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
    </div>
  );
}

export default Upload;