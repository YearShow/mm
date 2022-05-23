import Widget, { WidgetRight } from "../widget/Widget";
import "./home.scss";
import Datatable from '../datatable/Datatable';
import Db from '../db/Db';

const Home = () => {
	return (
		<div className="home">
			<div className="homeContainer">
				<div className="widgetsContainer">
					<div className="widgetsTitle">
						<span>База данных</span>
						<select name="select">
							<option value="value1">department_db</option>
							<option value="value2" selected>test_db</option>
							<option value="value3">employee_db</option>
						</select>
					</div>
					<div className="dbContainer">
						<Db />
					</div>
					<div className="widgets">
						<div className="widgetsLeft">
							<Widget />
						</div>
						<div className="widgetsRight">
							<WidgetRight />
						</div>
					</div>
				</div>
				<div className="listContainer">
					<Datatable />
				</div>
			</div>

		</div>
	);
};

export default Home;
