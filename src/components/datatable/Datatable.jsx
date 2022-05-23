import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./datatable.scss";

const Datatable = () => {
	const [data, setData] = useState(userRows);


	return (
		<div className="datatable">
			<div className="datatableTop">
				<div className="listTitle">Миграции</div>
				<Link to="/users/new" className="link">
					Применить
				</Link>
			</div>
			<div className="db" style={{ margin: "20px 0", lineHeight: '1.5', color: 'green' }}>
				<div className="db-wrapper">
					"0001_initial"<br />
					Operations to perform:<br />
					Target specific migration: 0001_initial, from engineers<br />
					Running migrations:<br />
					No migrations to apply."<br />
					0004_auto_20220429_1226<br />
					"Operations to perform:<br />  Target specific migration: 0004_auto_20220429_1226, from employee<br />
					Running migrations:<br />
					Applying employee.0004_auto_20220429_1226... OK

				</div>
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns}
				pageSize={9}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;
