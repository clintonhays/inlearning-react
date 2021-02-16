import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Contents from "./pages/Contents";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";
import NavBar from "./NavBar";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<div className="page-body">
					<Switch>
						<Route path="/" component={HomePage} exact />
						<Route path="/about" component={AboutPage} />
						<Route path="/contents" component={Contents} />
						<Route path="/article/:title" component={ArticlePage} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
