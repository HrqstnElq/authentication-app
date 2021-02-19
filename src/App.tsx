import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";

export default function App() {
	const isLogin = window.localStorage.getItem("user");
	// console.log(import.meta.env.VITE_APP_API_KEY);

	return (
		<AuthProvider>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						{isLogin ? <HomePage /> : <Redirect to="/login" />}
					</Route>
					<Route exact path="/login" component={LoginPage} />
				</Switch>
			</BrowserRouter>
		</AuthProvider>
	);
}
