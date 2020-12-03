import React from 'react';
import { Link } from 'react-router-dom';
import Jam from './jam.js'

import './jams.css'

class Jams extends React.Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			jams: null
		}
	}

	async componentDidMount() {
		const url = 'http://localhost:3001/jams'
		const response = await fetch(url)
		const data = await response.json()
		this.setState({jams: data, loading: false})
	}

	render() {
		const jamData = this.state.jams
		return (
			<div className="container">
				<h1>JAMS</h1>
				<Link to="/newjam">
					<div className="new">+</div>
				</Link>
				{this.state.loading || !this.state.jams ? <div>loading...</div> :
					<div>
						{jamData.map((item, index)=> {
							return (
								<Jam 
									key={index}
									name={item.name}
									title={item.title}
									date={item.date}
									address={item.address}
									description={item.description}
								/>
							)
						})}
					</div>
				}
			</div>
		)
	}
}

export default Jams;