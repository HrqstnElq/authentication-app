import {SignFunctionType, PopUpSignFunctionType, UploadFunctionType} from "./FunctionType";
import firebase from "firebase";

export type ProfileType = {
	bio: string;
	name: string;
	password: string;
	phone: string;
	avatar: FileList;
};

export type AuthContextType = {
	currentUser: firebase.User | null;
	signUp: SignFunctionType | null;
	signIn: SignFunctionType | null;
	continueWithGoogle: PopUpSignFunctionType | null;
	continueWithGithub: PopUpSignFunctionType | null;
	signOut: Function;
	updateProfile: UploadFunctionType | null;
};
