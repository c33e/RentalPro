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
					<li><a href="#courses">Rent A Vehicle</a></li>
					<li><a href="#tutorials">Rent Your Car</a></li>
					<li><a href="#jobs">About Us</a></li>
					<li><a href='#student'>Contact us</a></li>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
		  	</nav>

      <div class="box-img">
					<img src ="wheels.png" width="100%" height="500"/>
      </div>

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							We Warmly Welcome You To RentalPro!
						</h1>
						<p class="text-small">
							Paragraph can go here
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
                            We Really Value Sustainability in Driving.
						</h1>
						<p class="text-small">
							Paragraph can go here
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Here is Our Top Tips For Renting Online.
						</h1>
						<p class="text-small">
							Paragraph can go here
						</p>
					</div>
				</div>
			</section>

			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
    ) 
}
    