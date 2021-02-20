import {createContext, useContext, useEffect, useState} from "react";
import {auth, signInWithGithub, signInWithGoogle} from "../config/firebase";
import firebase from "firebase";

export type signFunctionType = (email: string, password: string) => Promise<firebase.auth.UserCredential>;
export type popUpSignFunctionType = () => Promise<firebase.auth.UserCredential>;

export type AuthContextType = {
	currentUser: firebase.User | null;
	signUp: signFunctionType | null;
	signIn: signFunctionType | null;
	continueWithGoogle: popUpSignFunctionType | null;
	continueWithGithub: popUpSignFunctionType | null;
	signOut: Function;
};

const authContextDefaultValue: AuthContextType = {
	currentUser: null,
	signUp: null,
	signIn: null,
	signOut: () => {},
	continueWithGoogle: null,
	continueWithGithub: null,
};

const AuthContext = createContext<AuthContextType>(authContextDefaultValue);

export function useAuth() {
	return useContext(AuthContext);
}

// auth provider component
const AuthProvider: React.FC = ({children}) => {
	const [currentUser, setCurrentUser] = useState<any>(authContextDefaultValue.currentUser);

	const signUp = async (email: string, password: string): Promise<firebase.auth.UserCredential> => {
		return auth.createUserWithEmailAndPassword(email, password);
	};

	const signIn = async (email: string, password: string): Promise<firebase.auth.UserCredential> => {
		return auth.signInWithEmailAndPassword(email, password);
	};

	const continueWithGoogle = async (): Promise<firebase.auth.UserCredential> => {
		return signInWithGoogle();
	};

	const continueWithGithub = async (): Promise<firebase.auth.UserCredential> => {
		return signInWithGithub();
	};

	const signOut = async () => {
		return await auth.signOut();
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);

			return unsubscribe;
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				signUp,
				signIn,
				continueWithGoogle,
				continueWithGithub,
				signOut,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
