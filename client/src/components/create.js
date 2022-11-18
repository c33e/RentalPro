import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   description: "",
   experience: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
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
 
   setForm({ name: "", description: "", experience: "" });
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
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="formcontent">
         <label htmlFor="description">Description</label>
         <input
           type="text"
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
