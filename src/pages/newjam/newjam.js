import React from 'react';
import './form.css'

class Newjam extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			title: '',
			description: '',
			address: ''
		}
	}
	
	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onTitleChange = (event) => {
		this.setState({title: event.target.value})
	}

	onDescriptionChange = (event) => {
		this.setState({description: event.target.value})
	}

	onAddressChange = (event) => {
		this.setState({address: event.target.value})
	}

	onSubmit = () => {
		const { name, title, description, address} = this.state
		fetch('http://localhost:3001/jams', {
			method: 'post',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({
				name: name,
				title: title,
				description: description,
				address: address
			})
		})
		.then(response => response.json())
		.catch(error => console.log(error))
	}

	render() {
		return (
			<div className="container">
				<h1>NEW JAM</h1>
				<form>
					<input
						onChange={this.onNameChange} 
						placeholder="your name" 
						type="text" 
						name="name" />
					<input 
						onChange={this.onTitleChange}
						placeholder="title" 
						type="text" 
						name="title" />
					<textarea 
						onChange={this.onDescriptionChange}
						rows="15"
						placeholder="description..." 
						type="text" 
						name="description" />
					<input 
						onChange={this.onAddressChange}
						placeholder="address" 
						type="text" 
						name="address" />
					<input
						onClick={this.onSubmit} 
						className="submit" 
						value="JAM" 
						type="submit" />
				</form>
			</div>
		)
	}
}

export default Newjam;