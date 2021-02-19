import {useForm} from "react-hook-form";
import classnames from "classnames";

import Logo from "../assets/images/devchallenges.svg";

type Input = {
	email: string;
	password: string;
};

export default function LoginPage() {
	const {register, handleSubmit, watch, errors} = useForm<Input>();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<div className="login-page h-screen flex justify-center items-center">
			<form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="w-full max-w-sm border-gray-400 border-2 p-10 rounded-xl">
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
						{errors.email && <span className="text-sm text-rose-500">Email is required</span>}
						<div className={classnames("input input--block ", {"input--error": errors.email})}>
							<i className="fas fa-envelope text-gray-400 mr-2"></i>
							<input type="text" name="email" ref={register({required: true})} placeholder="Email" />
						</div>
					</div>

					<div className="form-control">
						{errors.password && <span className="text-sm text-rose-500">Password is required</span>}

						<div className={classnames("input input--block ", {"input--error": errors.password})}>
							<i className="fas fa-key text-gray-400 mr-2"></i>
							<input type="text" name="password" ref={register({required: true})} placeholder="Password" />
						</div>
					</div>

					<button className="btn btn--block form-control bg-rose-400 hover:bg-rose-500 text-gray-100">Start coding now</button>

					<div className="form-control flex justify-center">
						<span className="text-xs text-gray-400">or continue with these social profile</span>
					</div>
				</div>
			</form>
		</div>
	);
}
