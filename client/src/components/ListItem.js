import { useState, useEffect } from "react";

import './styles/ListItem.css';

const ListItem = ({
  id,
  name,
  age
}) => {
  const [editUser, setEditUser] = useState({});
  const [inputName, setName] = useState(name);
  const [inputAge, setAge] = useState(Number(age));
  const [editMessage, setEditMessage] = useState("");

  const handleNameFieldChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }

  const handleAgeFieldChange = (event) => {
    event.preventDefault();
    setAge(event.target.value);
  }

  useEffect(() => {
    if (Object.entries(editUser).length !== 0) {
      fetch(`http://localhost:3001/user`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editUser)
      })
        .then(
          res => res.json()
        ).then((result) => {
          setEditMessage("Edited")
        })
    }
  }, [editUser])

  return (
    <div className="ListItem">
      <div className="ListItem-cell">
        <input
          type="text"
          value={inputName}
          onChange={(e) => handleNameFieldChange(e)}
        />
      </div>
      
      <div className="ListItem-cell">
        <input
          type="number"
          value={inputAge}
          onChange={(e) => handleAgeFieldChange(e)}
        />
      </div>

      <div className="ListItem-cell">
        <button
          className="ListItem-button"
          onClick={() => setEditUser({_id: id, name: inputName, age: Number(inputAge)})}>
          Edit
        </button>
      </div>

      <div className="ListItem-cell">
        <span>{editMessage}</span>
      </div>

    </div>
  );
}

export default ListItem;