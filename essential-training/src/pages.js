import React from "react";
import { Link } from "react-router-dom";

export function Home() {
	return (
		<div>
			<h1>[Company Home]</h1>
			<nav>
				<Link to="about">About</Link>
				<Link to="events">Events</Link>
				<Link to="contact">Contact</Link>
			</nav>
		</div>
	);
}

export function About() {
	return (
		<div>
			<h1>[Company About]</h1>
		</div>
	);
}

export function Events() {
	return (
		<div>
			<h1>[Company Events]</h1>
		</div>
	);
}

export function Contact() {
	return (
		<div>
			<h1>[Company Contact]</h1>
		</div>
	);
}
