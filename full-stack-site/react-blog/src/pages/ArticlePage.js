import React from "react";
import ArticlesList from "./components/ArticlesList";
import articleContent from "./article-content";

const ArticlePage = ({ match }) => {
	const name = match.params.title;
	const article = articleContent.find((article) => article.name === name);

	if (!article) {
		return <h1>This page does not exist!</h1>;
	}

	const otherArticles = articleContent.filter(
		(article) => article.name !== name
	);
	return (
		<>
			<h1>{article.title}</h1>
			{article.content.map((p, key) => (
				<p key={key}>{p}</p>
			))}

			<ArticlesList articles={otherArticles} />
		</>
	);
};

export default ArticlePage;
