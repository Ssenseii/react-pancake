import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/style.scss";
import Icons from "./assets/icons";

import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";

import Dashboard from "./pages/Dashboard";
import DB_Ecommerce from "./components/dashboard/DB_Ecommerce"
function App() {
	// const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

	const groups = [
		{
			title: "DASHBOARD",
			links: [
				{ to: "/dashboard/ecommerce", label: "E-Commerce", icon: Icons.cart },
				{
					to: "/dashboard/project-management",
					label: "Project Management",
					icon: Icons.paste,
				},
				{ to: "/dashboard/CRM", label: "CRM", icon: Icons.users },
				{ to: "/dashboard/travel-agency", label: "Travel Agency", icon: Icons.travel },
				{ to: "/dashboard/social-feed", label: "Social Feed", icon: Icons.social },
			],dropdowns: [],
		},
		{
			title: "APPS",
			links: [
				{ to: "/ecommerce", label: "E-Commerce", icon: Icons.cart },
				{ to: "/travel", label: "Travel Agency", icon: Icons.travel },
				{ to: "/chat", label: "Chat", icon: Icons.chat },
				{ to: "/email", label: "Email", icon: Icons.email },
				{ to: "/events", label: "Events", icon: Icons.event },
				{ to: "/kanban", label: "Kanban", icon: Icons.kanban },
				{ to: "/social", label: "Social", icon: Icons.social },
				{ to: "/calendar", label: "Calendar", icon: Icons.calendar },
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
					icon: Icons.phone,
				},
				{
					title: "Project Management",
					links: [
						{ to: "/create-new", label: "Create New", icon: Icons.plus },
						{ to: "/project-list-view", label: "Project List View", icon: Icons.view },
						{ to: "/project-card-view", label: "Project Card View", icon: Icons.view },
						{
							to: "/project-board-view",
							label: "Project Board View",
							icon: Icons.view,
						},
						{ to: "/todo-list", label: "Todo List", icon: Icons.list },
						{ to: "/project-details", label: "Project Details", icon: Icons.details },
					],
					icon: Icons.project,
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

	/// States

	const [isCollapsed, setIsCollapsed] = useState(false);

	/// Toggles

	const toggleSidebar = () => setIsCollapsed((prev) => !prev);

	/// Data

	

	return (
		<Router>
			<div className="main-app">
				<div className="col-xs-12">
					<Header toggleSidebar={toggleSidebar} />
				</div>

				<div className="main-app__container">
					<div>
						<Sidebar groups={groups} isCollapsed={isCollapsed} />
					</div>

					<main className="main">
						<Routes>
							<Route path="/" element={<Dashboard />} />

							{/* // Dashboard // */}

							<Route path="/dashboard/ecommerce" element={<DB_Ecommerce />}></Route>
						</Routes>
					</main>
				</div>
			</div>
		</Router>
	);
}

export default App;
