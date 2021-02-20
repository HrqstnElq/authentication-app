import logo from "../assets/images/devchallenges.svg";
import firebase from "firebase";

const defaultPhotoUrl = "https://i.pinimg.com/564x/98/7f/d7/987fd7fd0462bab17aa86d411611daf1.jpg";
export default function NavBar(props: {user: firebase.User}) {
	const {user} = props;

	return (
		<nav className="flex justify-between items-center h-12">
			<div className="nav__logo">
				<img className="h-6" src={logo} alt="devchallenges" />
			</div>
			<div className="flex items-center space-x-2">
				<label className="w-10 h-10 relative  overflow-hidden rounded-lg">
					<img className="nav_avatar" src={user.photoURL || defaultPhotoUrl} alt="" />
					<button className="nav__logout absolute w-10 h-10 bg-black bg-opacity-30">
						<i className="far fa-power-off text-white"></i>
					</button>
				</label>
				<h3 className="nav_username text-sm font-medium">{user.displayName || "Kangkuru"}</h3>
			</div>
		</nav>
	);
}
