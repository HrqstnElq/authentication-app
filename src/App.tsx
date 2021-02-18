import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export default function App() {
	const isLogin = false;
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					{isLogin ? <HomePage /> : <Redirect to="/login" />}
				</Route>
				<Route exact path="/login" component={LoginPage} />
			</Switch>
		</BrowserRouter>
	);
}
