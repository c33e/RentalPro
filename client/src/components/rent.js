import { useState, useEffect } from "react";
import './styles/Rent.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Auth from "./Auth"
import useToken from './useToken';
import ListUser from "./ListUser";
import AddUsers from "./AddUsers";
import SearchUser from "./SearchUser";
import MenuBar from "./MenuBar";

const Rent = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [listItems, setListItem] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    setListItem([]);
    fetch(`http://localhost:3001/user?name=${searchString}`)
      .then(
        res => res.json()
      ).then((result) => {
          setIsLoaded(true);
          setListItem(result);
        }
      )
  }, [searchString])

  const { token, setToken } = useToken();

    if(!token) {
         return <Auth setToken={setToken} />
       }

  const handleNewUser = (newData) => {
    console.log(newData);
    // setListItems([...listItems, {name: newData.name, age: Number(newData.age)}]);
  }

    // https://reactjs.org/docs/faq-ajax.html
    return (
      <div className="Rent">
        <MenuBar/>
        <SearchUser
          setSearchString={setSearchString}
        />
        <AddUsers
          handleNewUser={handleNewUser}
        />
        <ListUser
          listItems={listItems}
        />
      </div>
    )
}
export default Rent;

