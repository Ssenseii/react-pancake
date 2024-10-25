import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/style.scss";
import Icons from "./assets/icons";

import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";

import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {
	// const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

	const groups = [
		{
			title: "APPS",
			links: [
				{ to: "/ecommerce", label: "E-Commerce", icon: Icons.cart },
				{ to: "/travel", label: "Travel Agency" },
				{ to: "/chat", label: "Chat" },
				{ to: "/email", label: "Email" },
				{ to: "/events", label: "Events" },
				{ to: "/kanban", label: "Kanban" },
				{ to: "/social", label: "Social" },
				{ to: "/calendar", label: "Calendar" },
			],
			dropdowns: [
				{
					title: "CRM",
					links: [
						{ to: "/analytics", label: "Analytics" },
						{ to: "/deals", label: "Deals" },
						{ to: "/deal-details", label: "Deal Details" },
						{ to: "/reports", label: "Reports" },
						{ to: "/report-details", label: "Report Details" },
						{ to: "/add-contact", label: "Add Contact" },
					],
					icon: Icons.cart,
				},
				{
					title: "Project Management",
					links: [
						{ to: "/create-new", label: "Create New" },
						{ to: "/project-list-view", label: "Project List View" },
						{ to: "/project-card-view", label: "Project Card View" },
						{ to: "/project-board-view", label: "Project Board View" },
						{ to: "/todo-list", label: "Todo List" },
						{ to: "/project-details", label: "Project Details" },
					],
					icon: Icons.cart,
				},
			],
		},
		{
			title: "Group 2",
			links: [{ to: "/contact", label: "Contact" }],
			dropdowns: [
				{
					title: "Resources",
					links: [
						{ to: "/docs", label: "Documentation" },
						{ to: "/support", label: "Support" },
					],
				},
			],
		},
	];

	return (
		<Router>
			<div className="main-app">
				<div className="col-xs-12">
					<Header />
				</div>

				<div className="row no-gutters w-full">
					<div>
						<Sidebar groups={groups} />
					</div>

					<main className="main">
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/users" element={<Users />} />
							<Route path="/profile" element={<Profile />} />
						</Routes>
					</main>
				</div>
			</div>
		</Router>
	);
}

export default App;
