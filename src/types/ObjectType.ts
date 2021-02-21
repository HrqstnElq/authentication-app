import {SignFunctionType, PopUpSignFunctionType, UploadFunctionType} from "./FunctionType";
import firebase from "firebase";

export type ProfileType = {
	bio: string;
	name: string;
	password: string;
	phone: string;
	avatar: FileList;
};

export type MyUser = firebase.User & {
	bio: string;
	phone: string;
};

export type AuthContextType = {
	currentUser: MyUser | null;
	signUp: SignFunctionType | null;
	signIn: SignFunctionType | null;
	continueWithGoogle: PopUpSignFunctionType | null;
	continueWithGithub: PopUpSignFunctionType | null;
	signOut: Function;
	updateProfile: UploadFunctionType | null;
};
