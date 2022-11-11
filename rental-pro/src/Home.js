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
							RentalPro is a long established, trustworthy company that allows you to rent cars minus all the hassle.
							Since 2014 we have strived to make renting accessible to all through our simple website that allows seamless
							transactions. We promise to stay affordable, high quality and reliable. Based in Dublin, we have branches all over
							the country in Cork, Wexford and Donegal.
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
							Carbon footprint is no joke! Here at RentalPro we select only the finest electric and hybrid vehicles for our customers.
							Electric cars reduce NOx emissions by up to 90% and can recharge their batteries without needing to be plugged in. Not to
							mention the fuel savings! All-electric vehicles produce zero tailpipe emissions, and PHEVs produce no tailpipe emissions when
							operating in all-electric mode. We want to keep our planet healthy, and 10% of all proceeds go to climate saving organisation <a href = "https://carbon180.org"> Carbon180 </a>.
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
							Renting online saves the hassle of lengthy phone calls and long roadtrips- but it can be daunting if you are not used to it. 
							Here is our top tips for success!
							<dl>
 							<dt>Research Your Car</dt>
							<dd>Dont buy a car for long journeys that is ideal for short journeys! Make sure you are getting the correct car for you.</dd>
  							<dt>Stay Within Budget</dt>
							<dd>Always purchase within your means. Going overbudget may impacct you later on.</dd>
  							<dt>Get Insured!</dt>
							<dd>You never know what might happen to your car. Get insured to save yourself accidental damage fees.</dd>
							</dl>
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
    