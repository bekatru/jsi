import React from 'react';
import './home.css';

// images
import cover from './img/main.jpg'
import yellow from './img/yellowdiv.png';
import black from './img/blackdiv.png';
import bass from './img/contrabass.png';
import lira from './img/lira.png';
import calendar from './img/calendar.png';

// icons
import facebook from '../../icons/facebook.png';
import instagram from '../../icons/instagram.png';
import mail from '../../icons/mail.png';
import whatsapp from '../../icons/whatsapp.png';

function Home() {
	return (
		<div className="container">
			<header>
				<img className="cover" src={cover} alt="" />
				<div className="logo">
					<h1>JAM SESSIONS</h1>
					<h2>ISTANBUL</h2>
				</div>
			</header>
			<div className="pad-x">
				<h3>about</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div className="block">
				<img className="yellow" src={yellow} alt="" />
			</div>
			<div className="dark pad-x">
				<h3>mission</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.</p>
				<img className="bass" src={bass} alt="" />
			</div>

			<img className="blacktop" src={black} alt="" />
			<div className="pad-x">
				<h3>how it works?</h3>
				<div className="how">
					<div className="pad-x">
						<img src={lira} alt="" />
						<p>create a new event</p>
					</div>
					<p className="or">or</p>
					<div className="pad-x">
						<img src={calendar} alt="" />
						<p>join one of the <br/> upcoming events</p>
					</div>
				</div>
			</div>
			<img className="black" src={black} alt="" />
			<footer>
				<div className="contact">
					<img src={facebook} alt="" />
					<img src={instagram} alt="" />
					<img src={mail} alt="" />
					<img src={whatsapp} alt="" />
				</div>
				<div>
					<h1>JAM SESSIONS</h1>
					<h2>ISTANBUL</h2>
				</div>
			</footer>
		</div>
	);
}

export default Home;