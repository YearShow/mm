import React from 'react'
import Home from '../home/Home';
import Logs from '../logs/Logs';
import './main.scss';

const Main = () => {
	return (
		<div className="main">
			<Home />
			<Logs />
		</div>
	)
}

export default Main 