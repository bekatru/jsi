import React from 'react';
import { Link } from 'react-router-dom';

class Jam extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			open: false
		}
		this.togglePanel = this.togglePanel.bind(this);
	}

	togglePanel(e){
		this.setState({open: !this.state.open})
	}

	render() {
		const { title, date, address, name, description } = this.props;
		return (
			<div className="jam">
				<div onClick={(e)=> this.togglePanel(e)} className ="header">
					<div>
						<h2 className="title">{title}</h2>
						<p className="date">{date}</p>
					</div>
					<div>
						<p className="address">{address}</p>
						<p className="name">{name}</p>
					</div>
				</div>
				{this.state.open ? (
					<div className="content">
						<p className="description">{description}</p>
						<Link to="/join">
							<div className="join">Join</div>
						</Link>
					</div>) : null
				}
			</div>
		);
	}
}

export default Jam;