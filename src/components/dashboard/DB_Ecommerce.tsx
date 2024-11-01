import { FC } from "react";
import PageTitle from "../global/PageTitle";
import { Table } from "../global/Table";

const userData = [
	{ id: 1, name: "Alice", email: "alice@example.com" },
	{ id: 2, name: "Bob", email: "bob@example.com" },
	{ id: 3, name: "Charlie", email: "charlie@example.com" },
	{ id: 3, name: "Charlie", email: "charlie@example.com" },
	{ id: 3, name: "Charlie", email: "charlie@example.com" },
	{ id: 3, name: "Charlie", email: "charlie@example.com" },
	{ id: 3, name: "Charlie", email: "charlie@example.com" },
	{ id: 3, name: "Charlie", email: "charlie@example.com" },
];

const userColumns = [
	{ header: "ID", accessor: "id", sortable: true },
	{ header: "Name", accessor: "name", sortable: true },
	{ header: "Email", accessor: "email" },
];

const userActions = [
	{ label: "Delete", onClick: (id: number) => console.log(`Delete user with ID: ${id}`) },
	{ label: "Edit", onClick: (id: number) => console.log(`Edit user with ID: ${id}`) },
	{ label: "Clean", onClick: (id: number) => console.log(`Clean user with ID: ${id}`) },
];

const DB_Ecommerce: FC = () => {
	return (
		<div>
			<div className="row">
				<PageTitle
					className="col-md-4"  
					pageTitle="Ecommerce Dashboard"
					pageDescription="Here's what's going on at your business right now"
				/>
			</div>
			<div className="row">
				<Table
					data={userData}
					columns={userColumns}
					actions={userActions}
					pagination
					filterable
				/>
			</div>
		</div>
	);
};

export default DB_Ecommerce;
