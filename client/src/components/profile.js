import React from 'react';
import './styles/App.css';
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

			<aside>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
				 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
				  sunt in culpa qui officia deserunt mollit anim id est laborum.
        	</p>
			<p>
			At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
			corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
			qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
			 Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere 
			 possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut 
			 rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
			</p>
			</aside>

			<section class="section1">
			<figure>
				<img src= "profile.png" width="400" height="400"></img>
				<figcaption>Profile picture.</figcaption>
			</figure>
			</section>

			<section class="section">
				<p>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
			corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
			qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
			 Nam lib
				</p>

			</section>

			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
    ) 
}