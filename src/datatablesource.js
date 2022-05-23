export const userColumns = [

	{
		field: "name",
		headerName: "Наименование",
		width: 300,
	},
	{
		field: "description",
		headerName: "Описание",
		width: 250,
	},

	{
		field: "state",
		headerName: "Состояние",
		width: 100,
	},
	{
		field: "isReversable",
		headerName: "Возможность отката",
		width: 170,
		renderCell: (params) => {
			return (
				<div className={`cellWithStatus ${params.row.isReversable}`}>
					{params.row.isReversable}
				</div>
			);
		},
	},
];

//temporary data
export const userRows = [
	{
		id: 1,
		name: "0001_initial",
		description: "Not info",
		state: "[X]",
		isReversable: 'есть',
	},
	{
		id: 2,
		name: "0002_alter_permission_name_max_length",
		description: "Not info",
		state: "[X]",
		isReversable: 'есть',
	},
	{
		id: 3,
		name: "0003_alter_user_email_max_length",
		description: "Not info",
		state: "[X]",
		isReversable: 'есть',
	},
	{
		id: 4,
		name: "0004_alter_user_username_opts",
		description: "Not info",
		state: "[X]",
		isReversable: 'есть',
	},
	{
		id: 5,
		name: "0005_alter_user_last_login_null",
		description: "Not info",
		state: "[X]",
		isReversable: 'есть',
	},
	{
		id: 6,
		name: "0006_require_contenttypes_0002",
		description: "Not info",
		state: "[X]",
		isReversable: 'есть',
	},
	{
		id: 7,
		name: "0007_alter_validators_add_error_messages",
		description: "Not info",
		state: "[X]",
		isReversable: 'есть',
	},
	{
		id: 8,
		name: "0008_alter_user_username_max_length",
		description: "Not info",
		state: "[X]",
		isReversable: 'есть',
	},
	{
		id: 9,
		name: "0009_alter_user_last_name_max_length",
		description: "Not info",
		state: "[X]",
		isReversable: 'есть',
	},
	{
		id: 10,
		name: "0010_alter_group_name_max_length",
		description: "Not info",
		state: "[X]",
		isReversable: 'есть',
	},
	{
		id: 11,
		name: "0011_update_proxy_permissions",
		description: "Not info",
		state: "[X]",
		isReversable: 'есть',
	},

];
