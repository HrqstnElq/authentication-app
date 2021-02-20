import firebase from "firebase";

const defaultPhotoUrl = "https://i.pinimg.com/564x/98/7f/d7/987fd7fd0462bab17aa86d411611daf1.jpg";
export default function ProfileForm(props: {user: firebase.User}) {
	const {user} = props;

	return (
		<div className="flex items-center flex-col space-y-8">
			<div className="profile-form__header text-center">
				<h1 className="text-2xl font-bold">Personal info</h1>
				<p>Basic info, like your name and photo</p>
			</div>

			<div className="profile-form__body">
				<div className="profile-form__control ">
					<div>
						<h2 className="font-medium">Profile</h2>
						<p className="text-sm">Some info may be visible to other people</p>
					</div>
					<div>
						<button className="btn border hover:bg-gray-100">Edit</button>
					</div>
				</div>

				<div className="profile-form__control">
					<span className="w-1/6 font-semibold">Photo</span>
					<div className="w-5/6">
						<img
							className="w-16 h-16 object-cover overflow-hidden rounded-lg"
							src={user?.photoURL || defaultPhotoUrl}
							alt={user?.displayName || "Kangkuru"}
						/>
					</div>
				</div>

				<div className="profile-form__control">
					<span className="w-1/6 font-semibold">Name</span>
					<div className="w-5/6">
						<p>{user?.displayName || "Kangkuru"}</p>
					</div>
				</div>

				<div className="profile-form__control">
					<span className="w-1/6 font-semibold">Bio</span>
					<div className="w-5/6">
						<p>{user.displayName}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
