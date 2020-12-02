import React from 'react';
import './form.css'

function Newjam() {
	return (
		<div className="container">
			<h1>NEW JAM</h1>
			<form>
				<input placeholder="your name" type="text" name="name" />
				<input placeholder="title" type="text" name="title" />
				<textarea rows="15"placeholder="description..." type="text" name="description" />
				<input placeholder="address" type="text" name="address" />
				<input placeholder="date" type="text" name="date" />
				<input className="submit" value="JAM" type="submit" />
			</form>
		</div>
	)
}

export default Newjam;