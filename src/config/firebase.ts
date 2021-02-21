import firebase from "firebase/app";
import {ProfileType} from "./../types/ObjectType";

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const app = firebase.initializeApp({
	apiKey: import.meta.env.VITE_APP_API_KEY,
	authDomain: import.meta.env.VITE_APP_ATH_DOMAIN,
	projectId: import.meta.env.VITE_APP_PROJECT_ID,
	storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_APP_ID,
	measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
});

export const auth = app.auth();
export const userCollection = firebase.firestore().collection("users");

export default app;

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export const signInWithGoogle = () => {
	return auth.signInWithPopup(googleProvider);
};

export const signInWithGithub = () => {
	return auth.signInWithPopup(githubProvider);
};

export const updateProfileFirebase = (data: ProfileType): Promise<void> => {
	const user = firebase.auth().currentUser;
	const storageRef = firebase.storage().ref(user?.uid.toString());

	return new Promise<void>(async (resolve, reject) => {
		try {
			const url = data.avatar[0] ? await storageRef.put(data.avatar[0]).snapshot.ref.getDownloadURL() : null;

			await user?.updateProfile({
				photoURL: url || user.photoURL,
				displayName: data.name || user.displayName,
			});

			if (data.password) {
				await user?.updatePassword(data.password);
			}

			await userCollection.doc(user?.uid).set({
				phone: data.phone,
				bio: data.bio,
			});

			resolve();
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
};

export const resetPassword = async () => {
	auth.sendPasswordResetEmail;
};
