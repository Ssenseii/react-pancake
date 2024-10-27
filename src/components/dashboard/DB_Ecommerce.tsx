import { FC } from "react";
import PageTitle from "../global/PageTitle";
import { Table, Column } from "../global/Table";

interface User {
	id: number;
	name: string;
	email: string;
}

const userData: User[] = [
	{ id: 1, name: "Alice", email: "alice@example.com" },
	{ id: 2, name: "Bob", email: "bob@example.com" },
	{ id: 3, name: "Charlie", email: "charlie@example.com" },
];

const userColumns: Column<User>[] = [
	{ header: "ID", accessor: "id", sortable: true },
	{ header: "Name", accessor: "name", sortable: true },
	{ header: "Email", accessor: "email" },
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
					filterable
					pagination
					rowsPerPage={2}
				/>
			</div>
		</div>
	);
};

export default DB_Ecommerce;
