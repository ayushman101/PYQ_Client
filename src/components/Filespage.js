import React from 'react'
import { useLocation } from 'react-router-dom';

import { useEffect, useState } from 'react';


const Filespage = () => {

  const location=useLocation();
  
  const [files, setfiles] = useState([]);

  useEffect(() => {
		GetFiles();
	}, []);

	const GetFiles = () => {
		fetch(`http://localhost:3000` + `/` + location.state.School + `?Department=` + location.state.Department)
			.then(res => res.json())
			.then(data =>{
                setfiles(data)
            })
			.catch((err) => console.error("Error: ", err));
	}

  function Download_file(id,Name){
    console.log(id);

    fetch('http://localhost:3000/Download/' + id, {
        method:'GET'
    })  
.then(response => {
    // Ensure that the response is successful
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.blob(); // Get the response as a Blob
  })
  .then(blob => {
    // Create a temporary URL object
    const fileURL = URL.createObjectURL(blob);

    console.log(fileURL);

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = Name; // Set the desired file name

    // Programmatically click the link to initiate the download
    link.click();

    // Clean up the temporary objects
    URL.revokeObjectURL(fileURL);
    link.remove();
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
  }
  
  return (
    <div>

      <div>Department of {location.state.Department}</div>

      <div className="file_names">
				{files.length > 0 ? files.map(file => (
					<div className="file" key={file._id}>

						<div className="text" onClick={()=> Download_file (file._id,file.Name) }>{"Sem_" + file.Semester+"_" + file.Name}</div>
					
          </div>
				)) : (
					<p>There are no files</p>
				)}
			</div>

    </div>
  )
}

export default Filespage