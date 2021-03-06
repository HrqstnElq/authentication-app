import {useForm} from "react-hook-form";
import classnames from "classnames";
import ButtonCircle from "../components/ButtonCircle";
import {useLoading, Circles} from "@agney/react-loading";

import Logo from "../assets/images/devchallenges.svg";
import GoogleIcon from "../assets/images/Google.svg";
// import FacebookIcon from "../assets/images/Facebook.svg";
// import TwitterIcon from "../assets/images/Twitter.svg";
import GithubIcon from "../assets/images/Github.svg";
import {useAuth} from "../contexts/AuthContext";
import {useState} from "react";
import Footer from "../components/Footer";

type Input = {
	email: string;
	password: string;
	isSignUp: boolean;
};

export default function LoginPage() {
	const {register, handleSubmit, errors} = useForm<Input>();
	const {signIn, signUp, continueWithGoogle, continueWithGithub} = useAuth();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {containerProps, indicatorEl} = useLoading({
		loading: isLoading,
		indicator: <Circles />,
	});

	const [errMessage, setErrorMessage] = useState<string>("");

	const onSubmit = (data: Input) => {
		setIsLoading(true);

		if (data.isSignUp) {
			signUp &&
				signUp(data.email, data.password)
					.then((res) => {
						window.localStorage.setItem("user", JSON.stringify(res.user));
						window.location.href = "/";
					})
					.catch((error: any) => {
						setErrorMessage(error.message);
						setIsLoading(false);
					});
		} else {
			signIn &&
				signIn(data.email, data.password)
					.then((res) => {
						window.localStorage.setItem("user", JSON.stringify(res.user));
						window.location.href = "/";
					})
					.catch((error: any) => {
						setErrorMessage(error.message);
						setIsLoading(false);
					});
		}
	};

	return (
		<div {...containerProps} className="login-page h-screen flex justify-center items-center">
			{isLoading && (
				<div className="flex justify-center items-center fixed w-screen h-screen top-0 left-0	bg-white bg-opacity-20">
					<div className="w-20 text-red-500">{indicatorEl}</div>
				</div>
			)}

			<div className="max-w-sm m-5">
				<form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="border-gray-400 border-2 p-10 rounded-xl">
					<div className="form__header">
						<div className="header__logo mb-4">
							<img src={Logo} alt="devchallenges" />
						</div>

						<div className="header__title mb-4">
							<p className="font-medium">Join thousands of learners from around the world</p>
						</div>

						<div className="header__content my-4">
							<p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
						</div>
					</div>

					<div className="form__body">
						<div className="form-control">
							{errors.email && <span className="text-sm text-rose-500">Please enter your email address</span>}
							<div className={classnames("input block ", {"input--error": errors.email})}>
								<i className="fas fa-envelope text-gray-400 mr-2"></i>
								<input className="w-5/6" type="email" name="email" ref={register({required: true})} placeholder="Email" />
							</div>
						</div>

						<div className="form-control">
							{errors.password && <span className="text-sm text-rose-500">{errors.password.message}</span>}

							<div className={classnames("input block ", {"input--error": errors.password})}>
								<i className="fas fa-key text-gray-400 mr-2"></i>
								<input
									className="w-5/6"
									type="text"
									name="password"
									ref={register({
										required: {
											value: true,
											message: "Please enter your password",
										},
										minLength: {
											value: 6,
											message: "Password must be at least 6 characters",
										},
									})}
									placeholder="Password"
								/>
							</div>
						</div>

						<div className="form-control space-x-2">
							<input type="checkbox" ref={register} name="isSignUp" />
							<label className="text-sm">Sign up</label>
						</div>

						<button className="btn btn--block form-control bg-rose-400 hover:bg-rose-500 text-gray-100">Start coding now</button>

						{errMessage && (
							<div className="my-4 p-4 border border-rose-500 bg-rose-100 rounded-md">
								<p className="text-center text-rose-500">{errMessage}</p>
							</div>
						)}

						<div className="flex justify-center form-control">
							<span className="text-xs text-blue-400 cursor-pointer">Reset password</span>
						</div>

						<div className="form-control flex justify-center">
							<span className="text-sm text-gray-400">or continue with these social profile</span>
						</div>

						<div className="flex justify-center my-4">
							{continueWithGoogle && <ButtonCircle icon={GoogleIcon} signIn={continueWithGoogle} setErrorMessage={setErrorMessage} />}
							{continueWithGithub && <ButtonCircle icon={GithubIcon} signIn={continueWithGithub} setErrorMessage={setErrorMessage} />}
							{/* <ButtonCircle icon={FacebookIcon} />
							<ButtonCircle icon={TwitterIcon} />
							<ButtonCircle icon={GithubIcon} /> */}
						</div>
					</div>
				</form>

				<Footer />
			</div>
		</div>
	);
}
