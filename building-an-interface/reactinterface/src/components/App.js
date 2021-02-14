import React, { Component } from "react";
import "../css/App.css";
import AddAppointments from "./AddAppointments";
import ListAppointments from "./ListAppointments";
import SearchAppointments from "./SearchAppointments";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myAppts: [],
		};
		this.deleteAppointment = this.deleteAppointment.bind(this);
	}

	componentDidMount() {
		fetch("./data.json")
			.then((response) => response.json())
			.then((result) => {
				const appts = result.map((item, index) => {
					item.key = index;
					return item;
				});
				this.setState({
					myAppts: appts,
				});
			});
	}

	// deleteAppointment(apt) {
	// 	let appts = this.state.myAppts;
	// 	appts = without(appts, apt);
	// 	this.setState({
	// 		myAppts: appts,
	// 	});
	// }

	deleteAppointment(key) {
		this.setState({
			myAppts: this.state.myAppts.filter((appt) => appt.key !== key),
		});
	}

	render() {
		return (
			<main className="page bg-white" id="petratings">
				<div className="container">
					<div className="row">
						<div className="col-md-12 bg-white">
							<div className="container">
								<AddAppointments />
								<SearchAppointments />
								<ListAppointments
									appointments={this.state.myAppts}
									deleteAppointment={this.deleteAppointment}
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default App;
