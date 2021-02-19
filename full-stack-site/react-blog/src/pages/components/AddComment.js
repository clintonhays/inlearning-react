import React, { useState } from "react";

const AddComment = ({ name, setArticleInfo }) => {
	const [username, setUsername] = useState("");
	const [comment, setComment] = useState("");

	const addComment = async () => {
		const result = await fetch(`/api/articles/${name}/add-comment`, {
			method: "post",
			body: JSON.stringify({ username, text: comment }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const body = await result.json();
		console.log(body);
		setArticleInfo(body);
	};

	return (
		<div>
			<label htmlFor="name">
				Name:
				<input
					type="text"
					name="name"
					id="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</label>
			<label htmlFor="comment">
				Comment:
				<textarea
					name="comment"
					id=""
					cols="50"
					rows="4"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				></textarea>
			</label>
			<button onClick={() => addComment()}>Add Comment</button>
		</div>
	);
};

export default AddComment;
