import React from 'react';
import { Link } from 'react-router-dom';

import Jam from './jam.js'

import './jams.css'

function Jams() {
	const jamData = [
		{
		title: "Blues Jam",
		date: "December 2",
		address: 'Besiktas',
		name: "Dasha",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing 
					elit. Aenean vel lacus eget est rutrum sollicitudin. 
					Donec justo lorem, porttitor nec libero a, consequat 
					tempus nunc.`
		},
		{
		title: "Rock Jam",
		date: "January 1",
		address: 'Moda',
		name: "Beka",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing 
					elit. Aenean vel lacus eget est rutrum sollicitudin. 
					Donec justo lorem, porttitor nec libero a, consequat 
					tempus nunc.`
		}
	]
	return (
		<div className="container">
			<h1>JAMS</h1>
			<Link to="/newjam">
				<div className="new">+</div>
			</Link>
			<div>
				{jamData.map((item)=> {
					return (
						<Jam 
							name={item.name}
							title={item.title}
							date={item.date}
							address={item.address}
							description={item.description}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Jams;