import React, { useReducer } from "react";

const Checkbox = () => {
	const [ checked, toggle ] = useReducer((checked) => !checked, false);

	return (
		<React.Fragment>
			<label htmlFor="checkbox">{checked ? "checked" : "not checked"}</label>
			<input id="checkbox" type="checkbox" value={checked} onChange={toggle} />
		</React.Fragment>
	);
};

export default Checkbox;
