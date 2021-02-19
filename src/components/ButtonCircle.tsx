interface Props {
	icon: any;
}

export default function ButtonCircle(props: Props) {
	const {icon} = props;
	return (
		<div className="btn-circle">
			<img src={icon} alt="" />
		</div>
	);
}
