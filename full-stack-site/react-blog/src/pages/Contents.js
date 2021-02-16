import React from "react";
import articleContent from "./article-content";
import ArticlesList from "./components/ArticlesList";

const Contents = () => {
	return (
		<>
			<h1>Contents:</h1>
			<ArticlesList articles={articleContent} />
		</>
	);
};

export default Contents;
