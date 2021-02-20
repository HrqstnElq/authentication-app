import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import firebase from "firebase/app";
import {useEffect, useState} from "react";

export default function App() {
	const [isLogin, setIsLogin] = useState(true);
	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			if (user) setIsLogin(true);
			else setIsLogin(false);
		});

		return unsubscribe;
	}, []);

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
