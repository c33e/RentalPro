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
		<h3>All our available vehicles</h3>
		<p>We have 30 cars available for rent. If a car you recently viewed is no longer present,
			check again later, it may be unavailable!
		</p>
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
			<p>Car Make: {post.car_make}</p>
			<p>Model: {post.car_model}</p>
			<p>Year: {post.year}</p>
			<p>Colour: {post.colour}</p>
		  </div>
		))
	  }
	  </div>
      </div>
	)
}
