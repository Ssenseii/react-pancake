import PageTitle from "../global/PageTitle";
import Table from "../global/Table";

const userData = [
	{
		id: 1,
		name: "Alice",
		email: "alice@example.com",
		age: 30,
		joined: new Date(2023, 11, 1),
		interests: ["Coding", "Music", "Travel"],
		website: "https://alice.dev",
		isAdmin: true,
		picture: "https://placehold.co/100",
	},
	{
		id: 2,
		name: "Bob",
		email: "bob@example.com",
		age: 25,
		joined: new Date(2024, 0, 1),
		interests: ["Gaming", "Art", "Cooking"],
		isAdmin: false,
		picture: "https://placehold.co/100",
	},
	{
		id: 3,
		name: "Charlie",
		email: "charlie@example.com",
		age: 22,
		joined: new Date(2023, 10, 15),
		interests: ["Photography", "Hiking"],
		website: null,
		isAdmin: false,
		picture: "https://placehold.co/100",
	},
	{
		id: 4,
		name: "Diana",
		email: "diana@example.com",
		age: 29,
		joined: new Date(2023, 9, 20),
		interests: ["Reading", "Swimming"],
		website: "https://diana-blog.com",
		isAdmin: true,
		picture: "https://placehold.co/100",
	},
	{
		id: 5,
		name: "Edward",
		email: "edward@example.com",
		age: 35,
		joined: new Date(2022, 8, 1),
		interests: ["Technology", "Fishing"],
		website: null,
		isAdmin: false,
		picture: "https://placehold.co/100",
	},
	{
		id: 6,
		name: "Fiona",
		email: "fiona@example.com",
		age: 28,
		joined: new Date(2023, 7, 15),
		interests: ["Yoga", "Cooking"],
		website: "https://fionafit.com",
		isAdmin: true,
		picture: "https://placehold.co/100",
	},
	{
		id: 7,
		name: "George",
		email: "george@example.com",
		age: 27,
		joined: new Date(2023, 5, 25),
		interests: ["Basketball", "Movies"],
		website: null,
		isAdmin: false,
		picture: "https://placehold.co/100",
	},
	{
		id: 8,
		name: "Helen",
		email: "helen@example.com",
		age: 32,
		joined: new Date(2023, 4, 12),
		interests: ["Writing", "Painting"],
		website: "https://helenart.com",
		isAdmin: true,
		picture: "https://placehold.co/100",
	},
	{
		id: 9,
		name: "Isaac",
		email: "isaac@example.com",
		age: 26,
		joined: new Date(2022, 3, 18),
		interests: ["Running", "Chess"],
		website: "https://isaacrun.com",
		isAdmin: false,
		picture: "https://placehold.co/100",
	},
	{
		id: 10,
		name: "Jane",
		email: "jane@example.com",
		age: 33,
		joined: new Date(2022, 2, 5),
		interests: ["Dancing", "Photography"],
		website: null,
		isAdmin: true,
		picture: "https://placehold.co/100",
	},
];

const userColumns = [
	{ header: "ID", accessor: "id", sortable: true },
	{ header: "Name", accessor: "name", sortable: true },
	{ header: "Email", accessor: "email" },
	{ header: "Age", accessor: "age", sortable: true },
	{
		header: "Joined",
		accessor: "joined",
		CellFormatter: ({ value }) => new Date(value).toLocaleDateString(), // Format date
	},
	{
		header: "Interests",
		accessor: "interests",
		CellFormatter: ({ value }) => value.join(", "), // Join array as string
	},
	{
		header: "Website",
		accessor: "website",
		CellFormatter: ({ value }) =>
			value ? (
				<a href={value} target="_blank" rel="noopener noreferrer">
					Link
				</a>
			) : (
				"—"
			), // Handle link or empty
	},
	{
		header: "Admin",
		accessor: "isAdmin",
		CellFormatter: ({ value }) => (value ? "Yes" : "No"), // Boolean to text
	},
	{
		header: "Picture",
		accessor: "picture",
		CellFormatter: ({ value }) => (
			<img src={value} alt="User" style={{ width: 50, height: 50, borderRadius: "50%" }} />
		), // Display user picture
	},
];


const userActions = [
	{ label: "Delete", onClick: (id) => console.log(`Delete user with ID: ${id}`) },
	{ label: "Edit", onClick: (id) => console.log(`Edit user with ID: ${id}`) },
	{ label: "Clean", onClick: (id) => console.log(`Clean user with ID: ${id}`) },
];

const DB_Ecommerce = () => {
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
					rowsPerPage={7}
				/>
			</div>
		</div>
	);
};

export default DB_Ecommerce;
