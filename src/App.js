
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Navbar from './components/navbar/Navbar';

import './style/app.scss';
import "./style/dark.scss";
import Main from './components/main/Main';

function App() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<BrowserRouter>
				<Navbar />
				<Main />
			</BrowserRouter>
		</div>
	);
}

export default App;
