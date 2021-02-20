import NavBar from "../components/NavBar";
import ProfileForm from "../components/ProfileForm";
import AuthProvider, {useAuth} from "../contexts/AuthContext";

// consumer
const Profile = () => {
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
};

export default function HomePage() {
	return (
		<AuthProvider>
			<Profile />
		</AuthProvider>
	);
}
