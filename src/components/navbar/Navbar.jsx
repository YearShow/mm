import { useContext } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link } from 'react-router-dom';

import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

const Navbar = () => {
	const { dispatch } = useContext(DarkModeContext);

	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="top">
					<Link to="/" style={{ textDecoration: "none" }}>
						<span className="logo">менеджер миграций</span>
					</Link>
				</div>
				<div className="items">
					<div className="item" style={{ cursor: 'pointer' }}>
						<DarkModeOutlinedIcon
							className="icon"
							onClick={() => dispatch({ type: "TOGGLE" })}
						/>
					</div>
					<div className="item">
						<span className="username">
							admin
						</span>
					</div>
					<div className="item">
						<Link to="#">
							выйти
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
