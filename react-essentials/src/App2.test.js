import { render } from "@testing-library/react";
import React from "react";
import App2 from "./App2";

test("renders an h1", () => {
	const { getByText } = render(<App2 />);
	const h1 = getByText(/This is a test...this is only a test./);
	expect(h1).toHaveTextContent("This is a test...this is only a test.");
});
