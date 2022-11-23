import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";

 
export default function Create() {

 const [form, setForm] = useState({
   name: "",
   description: "",
   experience: "",
   image: "",
 });

 const [selectedFile, setSelectedFile] = useState(null);

 const navigate = useNavigate();

 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });

 }

 const FileUploader = ({onFileSelect}) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        // handle validations
        onFileSelect(e.target.files[0])
    }

    return (
      <div className="formcontent">
            <input type="file" onChange={handleFileInput}/>
      </div>
      )
}
 
//This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newProfile = { ...form };
 
   await fetch("http://localhost:5000/profile/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newProfile),
   })
   .catch(error => {
     window.alert(error);
     return;
   });

   const image = selectedFile

   setForm({ name: "", description: "", experience: "", image: ""});
   navigate("/");
   
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div className="profileformcontainer">
     <form className="profileform" onSubmit={onSubmit}>
       <div className="formcontent">
         <h3 className="formtitle">Create New Profile</h3>
         <label htmlFor="name">Name</label>
         <input
           required type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="formcontent">
         <label htmlFor="description">Description</label>
         <input
           required type="text"
           minlength="6"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />
       </div>
       <div className="formcontent">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="experienceOptions"
             id="experienceExperienced"
             value="Experienced Driver"
             checked={form.experience === "Experienced Driver"}
             onChange={(e) => updateForm({ experience: e.target.value })}
           />
           <label htmlFor="experienceExperienced" 
className="form-check-label">Experienced Driver</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="experienceOptions"
             id="experienceNew"
             value="New Driver"
             checked={form.experience === "New Driver"}
             onChange={(e) => updateForm({ experience: e.target.value })}
           />
           <label htmlFor="experienceNew" 
className="form-check-label">New Driver</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="experienceOptions"
             id="experienceLearner"
             value="Learner Driver"
             checked={form.experience === "Learner Driver"}
             onChange={(e) => updateForm({ experience: e.target.value })}
           />
           <label htmlFor="experienceLearner" 
className="form-check-label">Learner Driver</label>
         </div>
         <br></br>
         <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
          onChange={(e) => updateForm({ image: e.target.value })}
        />
        <br></br>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create profile"
           className="btn-primary"
         />
       </div>
       
     </form>
   </div>
   
 );


 
}
