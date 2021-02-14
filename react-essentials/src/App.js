import React, { useState, useEffect } from "react";
import "./App.css";

function App({ login }) {
	const [ data, setData ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	useEffect(
		() => {
			async function fetchData() {
				if (!login) return;
				try {
					setLoading(true);
					const response = await fetch(`https://api.github.com/users/${login}`);
					const json = await response.json();
					setData(json);
					setLoading(false);
				} catch (error) {
					setError(error);
				}
			}
			fetchData();
		},
		[ login ]
	);

	if (loading) return <h1>Loading...</h1>;
	if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
	if (!data) return null;

	return (
		<div>
			<h1>{data.name}</h1>
			<p>{data.blog}</p>
			<img src={data.avatar_url} alt={data.name} height="200" />
		</div>
	);
}

export default App;
