import React from "react";
import articleContent from "./article-content";

const ArticlePage = ({ match }) => {
	const name = match.params.title;
	const article = articleContent.find((article) => article.name === name);

	if (!article) {
		return <h1>This page does not exist!</h1>;
	}
	return (
		<>
			<h1>{article.title}</h1>
			{article.content.map((p, key) => (
				<p key={key}>{p}</p>
			))}
		</>
	);
};

export default ArticlePage;
