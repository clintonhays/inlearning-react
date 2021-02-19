import React, { useState, useEffect } from "react";
import ArticlesList from "./components/ArticlesList";
import articleContent from "./article-content";
import NotFound from "./NotFound";
import CommentsList from "./components/CommentsList";
import UpvoteSection from "./components/UpvoteSection";
import AddComment from "./components/AddComment";

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
			<UpvoteSection
				name={name}
				upvotes={articleInfo.upvotes}
				setArticleInfo={setArticleInfo}
			/>
			{article.content.map((p, key) => (
				<p key={key}>{p}</p>
			))}
			<CommentsList comments={articleInfo.comments} />
			<AddComment name={name} setArticleInfo={setArticleInfo} />
			<h3>Other Articles:</h3>
			<ArticlesList articles={otherArticles} />
		</>
	);
};

export default ArticlePage;
