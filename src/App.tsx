import firebase from "firebase/app";
import {useEffect, useState} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
		<>
			{" "}
			<BrowserRouter>
				<Switch>
					<Route exact path="/login" component={LoginPage} />
					<Route path="/">{isLogin ? <HomePage /> : <Redirect to="/login" />}</Route>
				</Switch>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
}
