import React from "react";
import Checkbox from "./Checkbox";
import { render, fireEvent } from "@testing-library/react";

test("Selecting checkbox", () => {
	const { getByLabelText } = render(<Checkbox />);
	const checkbox = getByLabelText(/not checked/);
	fireEvent.click(checkbox);
	expect(checkbox.checked).toEqual(true);
});
