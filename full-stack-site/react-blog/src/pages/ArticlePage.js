import React, { useState, useEffect } from "react";
import ArticlesList from "./components/ArticlesList";
import articleContent from "./article-content";
import NotFound from "./NotFound";
import CommentsList from "./components/CommentsList";

const ArticlePage = ({ match }) => {
	const name = match.params.title;
	const article = articleContent.find((article) => article.name === name);

	const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(`/api/articles/${name}`);
			const body = await result.json();

			setArticleInfo(body);
		};
		fetchData();
	});

	if (!article) {
		return <NotFound />;
	}

	const otherArticles = articleContent.filter(
		(article) => article.name !== name
	);
	return (
		<>
			<h1>{article.title}</h1>
			<p>This post has been upvoted {articleInfo.upvotes} times</p>
			{article.content.map((p, key) => (
				<p key={key}>{p}</p>
			))}
			<CommentsList comments={articleInfo.comments} />
			<h3>Other Articles:</h3>
			<ArticlesList articles={otherArticles} />
		</>
	);
};

export default ArticlePage;
