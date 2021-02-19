import React from "react";

const UpvoteSection = ({ name, upvotes, setArticleInfo }) => {
	const addUpvote = async () => {
		const result = await fetch(`/api/articles/${name}/upvote`, {
			method: "post",
		});

		const body = await result.json();
		setArticleInfo(body);
	};

	return (
		<div>
			<button onClick={() => addUpvote()}>Upvote</button>
			<p>This post has been upvoted {upvotes} times</p>
		</div>
	);
};

export default UpvoteSection;
