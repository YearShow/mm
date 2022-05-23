import React from 'react'
import { useToggle } from '../../hooks/useToggle';
import './logs.scss'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Logs = () => {
	const [isOpen, toggleOpen] = useToggle(false);
	return (
		<div className="div-container">
			<div className={"logs " + (isOpen && "active")} >
				<ListOutlinedIcon
					className="icon"
					onClick={toggleOpen}
				/>
				<div className="title">Логи</div>
				<div className="db"
					style={{ minHeight: '700px', marginTop: '-30px', marginLeft: 35, marginRight: 20, color: 'green', overflowWrap: 'anywhere' }}
				>
					<div className="db-wrapper">
						<p>"0001_initial"
							Operations to perform:
							Target specific migration: 0001_initial, from engineers
							Running migrations:
							No migrations to apply.
							"0004_auto_20220429_1226"
							Operations to perform:
							Target specific migration: 0004_auto_20220429_1226, from employee
							Running migrations:
							Applying employee.0004_auto_20220429_1226... OK
						</p>
					</div>
				</div>
			</div >

		</div>
	)
}

export default Logs;