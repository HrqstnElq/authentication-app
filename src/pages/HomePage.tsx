import NavBar from "../components/NavBar";
import ProfileForm from "../components/ProfileForm";
import {useAuth} from "../contexts/AuthContext";
import firebase from "firebase/app";
import {Route, Switch} from "react-router-dom";
import EditPage from "./EditPage";
import Footer from "../components/Footer";

export default function HomePage() {
	const {currentUser} = useAuth();

	return (
		<div className="w-5/6 m-auto">
			{currentUser && (
				<>
					<NavBar user={currentUser} />
					<Switch>
						<Route exact path="/">
							<ProfileForm user={currentUser} />
						</Route>
						<Route exact path="/edit">
							<EditPage />
						</Route>
					</Switch>
					<div className="profile-form__footer m-auto mb-10">
						<Footer />
					</div>
				</>
			)}
		</div>
	);
}
