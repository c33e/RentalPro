import './styles/ListUsers.css';
import ListItem from './ListItem';
import React, { useContext } from "react";

const ListUsers = ({ 
  listItems 
}) => {


  return (
    <div className="ListUsers">

      {console.log(listItems)}
      {listItems.map(item => (
        <ListItem
          className="ListItem"
          id={item._id}
          name={item.name}
          age={item.age}
        />
      ))}
    </div>
  );
}

export default ListUsers;