import AuthProvider, {useAuth} from "../contexts/AuthContext";

// consumer
const Todos = () => {
	const {currentUser, signUp} = useAuth();
	console.log(currentUser);

	return <div></div>;
};

export default function HomePage() {
	return (
		<AuthProvider>
			<Todos />
		</AuthProvider>
	);
}
