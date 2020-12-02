import React from 'react';
import './nav.css'

function Nav() {
	return (
		<nav>
			<h1>JSIstanbul</h1>
			<ul className="nav-links">
				<li>About</li>
				<li>Jams</li>
				<li>New Jam</li>
			</ul>
		</nav>
	)
}

export default Nav;