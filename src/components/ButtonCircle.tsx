import {popUpSignFunctionType} from "../contexts/AuthContext";

interface Props {
	icon: any;
	signIn: popUpSignFunctionType;
	setErrorMessage: Function;
}

export default function ButtonCircle(props: Props) {
	const {icon, signIn, setErrorMessage} = props;

	const onSignIn = () => {
		signIn()
			.then(() => {
				setErrorMessage("");
				window.location.href = "/";
			})
			.catch((error) => {
				setErrorMessage(error.message);
			});
	};

	return (
		<div className="btn-circle" onClick={onSignIn}>
			<img src={icon} alt="" />
		</div>
	);
}
