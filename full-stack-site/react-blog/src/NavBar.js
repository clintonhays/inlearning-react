import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/contents">Contents</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
