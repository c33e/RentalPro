import { useState, useEffect } from "react";
import './styles/Rent.css';
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Auth from "./Auth"
import useToken from './useToken';
import Data from "../cardata.json";

export default function Rent () {
	const [query, setQuery] = useState("")

	//authentication here
	const { token, setToken } = useToken();
    if(!token) {
         return <Auth setToken={setToken} />
       }

	return (
		//searchbar baased off of https://blog.logrocket.com/create-search-bar-react-from-scratch/ tutorial
		<div className="Rent">
        <input placeholder="Search Cars Here..." onChange={event => setQuery(event.target.value)}/>
		<div>
		{
		Data.filter(post => {
			if (query === "") {
				//if query is empty
				return post;
			} else if (post.car_make.toLowerCase().includes(query.toLowerCase())) {
				//returns filtered array
				return post;
			}	  
		}).map((post) => (
			<div className="box" key={post.id}>
			<img className="imgs" src={post.image}/>
			<p>{post.car_make}</p>
			<p>{post.car_model}</p>
			<p>{post.year}</p>
			<p>{post.colour}</p>
		  </div>
		  
		))
	  }
	  </div>
      </div>
	  
	  
	)
}
