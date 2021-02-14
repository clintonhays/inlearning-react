import React from "react";
import ReactDOM from "react-dom";
import App2 from "./App2";

import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<Router>
		<App2 />
	</Router>,
	document.getElementById("root")
);
