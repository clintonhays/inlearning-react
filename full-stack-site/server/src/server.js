import express from "express";
import bodyParser from "body-parser";

const upvotes = {
	"learn-react": {
		upvotes: 0,
		comment: "",
	},
	"learn-node": {
		upvotes: 0,
		comment: "",
	},
	"my-thoughts-on-resumes": {
		upvotes: 0,
		comment: "",
	},
};

const app = express();

app.use(bodyParser.json());

app.post("/api/articles/:name/upvote", (req, res) => {
	const articleName = req.params.name;

	upvotes[articleName].upvotes += 1;
	res
		.status(200)
		.send(`${articleName} now has ${upvotes[articleName].upvotes} upvotes!!`);
});

app.listen(8000, () => {
	console.log("listening on port 8000");
});
