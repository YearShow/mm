import "./widget.scss";

export const WidgetRight = () => {

	return (
		<div className="widget">
			<div className="left">
				<span className="title">AUTOCOMMIT</span>
				<span className="counter">true</span>
			</div>
			<div className="left">
				<span className="title">ENGINE</span>
				<span className="counter">django.db.backends.postgresql_psycopg2</span>
			</div>
			<div className="left">
				<span className="title">PASSWORD</span>
				<span className="counter">100</span>
			</div>
			<div className="left">
				<span className="title">MIRROR</span>
				<span className="counter"></span>
			</div>
			<div className="left">
				<span className="title">OPTIONS</span>
				<span className="counter"></span>
			</div>
			<div className="left">
				<span className="title">ATOMIC_REQUESTS</span>
				<span className="counter">false</span>
			</div>
		</div>
	);
};
const Widget = () => {

	return (
		<div className="widget">
			<div className="left">
				<span className="title">CONN_MAX_AGE</span>
				<span className="counter">0</span>
			</div>
			<div className="left">
				<span className="title">USER</span>
				<span className="counter">postgres</span>
			</div>
			<div className="left">
				<span className="title">HOST</span>
				<span className="counter">100.100.50.49</span>
			</div>
			<div className="left">
				<span className="title">NAME</span>
				<span className="counter">test_db</span>
			</div>
			<div className="left">
				<span className="title">PORT</span>
				<span className="counter">3000</span>
			</div>
			<div className="left">
				<span className="title">TIME_ZONE</span>
				<span className="counter">msk</span>
			</div>
		</div>
	);
};

export default Widget;
