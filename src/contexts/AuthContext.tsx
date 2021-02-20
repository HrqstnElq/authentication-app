import {createContext, useContext, useEffect, useState} from "react";
import {auth} from "../config/firebase";
import firebase from "firebase";

type signFunctionType = (email: string, password: string) => Promise<firebase.auth.UserCredential>;

export type AuthContextType = {
	currentUser: firebase.User | null;
	signUp: signFunctionType | null;
	signIn: signFunctionType | null;
};

const authContextDefaultValue: AuthContextType = {
	currentUser: null,
	signUp: null,
	signIn: null,
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
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
