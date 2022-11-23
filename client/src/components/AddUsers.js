import React, {useState} from 'react';
import './styles/AddUser.css';

const AddUser = (
  {handleNewUser}
) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");

  const handleNameFieldChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }

  const handleAgeFieldChange = (event) => {
    event.preventDefault();
    setAge(event.target.value);
  }

  const handleCreateUser = async (event) => {
    event.preventDefault();
    setStatusMessage("");

    const user = {
      "name": name,
      "age": Number(age)
    };

    fetch("http://localhost:3001/user", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(newUser => {
        setStatusMessage(`Trasaction ID: ${newUser.id}`)
        handleNewUser({_id: newUser.id, ...user})
      })
      .catch(error => console.log('error', error));
  }

  return(
    <div className="AddUser">

      <div className="AddUser-cell">
        <label>Name</label>
        <input
          type="text"
          placeholder=""
          value={name}
          onChange={(e) => handleNameFieldChange(e)}
        />
      </div>

      <div className="AddUser-cell">
        <label>Age</label>
        <input
          type="number"
          placeholder=""
          value={age}
          onChange={(e) => handleAgeFieldChange(e)}
        />
      </div>

      <div className="AddUser-cell">
        <button onClick={handleCreateUser}>
          Create User
        </button>
      </div>

      <div className="AddUser-cell">
        <p>
          { statusMessage }
        </p>
      </div>

    </div>
  );
};

export default AddUser