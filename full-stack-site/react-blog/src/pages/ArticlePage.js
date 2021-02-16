import React from "react";
import ArticlesList from "./components/ArticlesList";
import articleContent from "./article-content";
import NotFound from "./NotFound";

const ArticlePage = ({ match }) => {
	const name = match.params.title;
	const article = articleContent.find((article) => article.name === name);

	if (!article) {
		return <NotFound />;
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

			<h3>Other Articles:</h3>
			<ArticlesList articles={otherArticles} />
		</>
	);
};

export default ArticlePage;
