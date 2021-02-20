import { PopUpSignFunctionType } from "../types/FunctionType";

interface Props {
	icon: any;
	signIn: PopUpSignFunctionType;
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
