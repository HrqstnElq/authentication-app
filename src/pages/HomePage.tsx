import NavBar from "../components/NavBar";
import ProfileForm from "../components/ProfileForm";
import {useAuth} from "../contexts/AuthContext";

export default function HomePage() {
	const {currentUser} = useAuth();

	return (
		<div className="w-5/6 m-auto">
			{currentUser && (
				<>
					<NavBar user={currentUser} />
					<ProfileForm user={currentUser} />
				</>
			)}
		</div>
	);
}
