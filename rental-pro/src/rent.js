import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

export default function (props) {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src="logo.png" />
					</div>
					<li><a href="#href1">Rent A Vehicle</a></li>
					<li><a href="#href2">My Profile</a></li>
				</ul>


				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
		  	</nav>

			<header class="header">  </header>

			<section class ="section"></section>
			<section class ="section"></section>
			<section class ="section"></section>

			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
    ) 
}
