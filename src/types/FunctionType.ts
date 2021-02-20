import {ProfileType} from "./ObjectType";
import firebase from "firebase";

export type SignFunctionType = (email: string, password: string) => Promise<firebase.auth.UserCredential>;
export type PopUpSignFunctionType = () => Promise<firebase.auth.UserCredential>;
export type UploadFunctionType = (data: ProfileType) => Promise<any>;
