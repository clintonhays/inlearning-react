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
			formDisplay: false,
			orderBy: "petName",
			orderDir: "asc",
			apptKey: 0,
		};
		this.deleteAppointment = this.deleteAppointment.bind(this);
		this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
		this.addNewAppt = this.addNewAppt.bind(this);
		this.changeOrderBy = this.changeOrderBy.bind(this);
		this.changeOrderDir = this.changeOrderDir.bind(this);
	}

	componentDidMount() {
		fetch("./data.json")
			.then((response) => response.json())
			.then((result) => {
				const appts = result.map((item) => {
					item.key = this.state.apptKey;
					this.setState((prevState) => ({
						apptKey: prevState.apptKey + 1,
					}));
					return item;
				});
				this.setState((prevState) => ({
					myAppts: appts,
					apptKey: prevState.apptKey + 1,
				}));
			});
	}

	deleteAppointment(key) {
		this.setState({
			myAppts: this.state.myAppts.filter((appt) => appt.key !== key),
		});
	}

	toggleFormDisplay() {
		this.setState({
			formDisplay: !this.state.formDisplay,
		});
	}

	addNewAppt(newAppt) {
		const appts = this.state.myAppts;
		newAppt.key = this.state.apptKey;
		appts.unshift(newAppt);
		this.setState((prevState) => ({
			myAppts: appts,
			apptKey: prevState.apptKey + 1,
		}));
	}

	changeOrderBy(order, dir) {
		this.setState({
			orderBy: order,
			orderDir: dir,
		});
	}

	changeOrderDir(dir, order) {
		this.setState({
			orderBy: order,
			orderDir: dir,
		});
	}

	render() {
		let order;
		let sortedAppts = this.state.myAppts;

		if (this.state.orderDir === "asc") {
			order = 1;
		} else {
			order = -1;
		}

		sortedAppts.sort((a, b) => {
			if (
				a[this.state.orderBy].toLowerCase() <
				b[this.state.orderBy].toLowerCase()
			) {
				return -1 * order;
			} else {
				return 1 * order;
			}
		});

		return (
			<main className="page bg-white" id="petratings">
				<div className="container">
					<div className="row">
						<div className="col-md-12 bg-white">
							<div className="container">
								<AddAppointments
									formDisplay={this.state.formDisplay}
									toggleFormDisplay={this.toggleFormDisplay}
									addNewAppt={this.addNewAppt}
								/>
								<SearchAppointments
									orderBy={this.state.orderBy}
									orderDir={this.state.orderDir}
									changeOrderBy={this.changeOrderBy}
									changeOrderDir={this.changeOrderDir}
								/>
								<ListAppointments
									appointments={sortedAppts}
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
