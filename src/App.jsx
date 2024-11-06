import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/style.scss";
import Icons from "./assets/icons";

/* Layouts */
import MainLayout from "./layouts/MainLayout";
import NoSidebarLayout from "./layouts/NoSidebarLayout";

/* Sidebar Layout */
import Dashboard from "./pages/Dashboard";
import Resultats from "./pages/resultats";
import DB_Ecommerce from "./components/dashboard/DB_Ecommerce";

/// Inventory System
import InventoryDashboard from "./pages/inventory_sys/InventoryDashboard";
import InventoryReports from "./pages/inventory_sys/InventoryReports"
import InventoryNewStock from "./pages/inventory_sys/stock_management/InventoryNewStock"
import InventoryViewStock from "./pages/inventory_sys/stock_management/InventoryViewStock"
import InventorySuppliers from "./pages/inventory_sys/stock_management/InventorySuppliers"
import InventoryNewOrder from "./pages/inventory_sys/orders/InventoryNewOrder"
import InventoryOrderHistory from "./pages/inventory_sys/orders/InventoryOrderHistory"
import InventoryReturns from "./pages/inventory_sys/orders/InventoryReturns"

/* No SideBar Layout */
import Login from "./pages/auth/Login";

function App() {
	const groups = [
		{
			title: "INVENTORY MANAGEMENT",
			links: [
				{ to: "/inventory/dashboard", label: "Dashboard", icon: Icons.dashboard },
				{ to: "/inventory/reports", label: "Reports", icon: Icons.reports },
			],
			dropdowns: [
				{
					title: "Stock Management",
					links: [
						{ to: "/inventory/add_stock", label: "Add Stock", icon: Icons.plus },
						{ to: "/inventory/view_stock", label: "View Stock", icon: Icons.list },
						{ to: "/inventory/suppliers", label: "Suppliers", icon: Icons.truck },
					],
					icon: Icons.warehouse,
				},
				{
					title: "Orders",
					links: [
						{ to: "/inventory/new_order", label: "New Order", icon: Icons.cart },
						{
							to: "/inventory/order_history",
							label: "Order History",
							icon: Icons.history,
						},
						{ to: "/inventory/returns", label: "Returns", icon: Icons.returns },
					],
					icon: Icons.orders,
				},
			],
		},
		{
			title: "ERP SOFTWARE",
			links: [
				{ to: "/erp_dashboard", label: "Dashboard", icon: Icons.dashboard },
				{ to: "/erp_financials", label: "Financials", icon: Icons.financials },
			],
			dropdowns: [
				{
					title: "HR Management",
					links: [
						{
							to: "/erp_employee_directory",
							label: "Employee Directory",
							icon: Icons.users,
						},
						{ to: "/erp_payroll", label: "Payroll", icon: Icons.cash },
						{
							to: "/erp_leave_management",
							label: "Leave Management",
							icon: Icons.calendar,
						},
					],
					icon: Icons.circles,
				},
				{
					title: "Operations",
					links: [
						{ to: "/erp_production", label: "Production", icon: Icons.production },
						{
							to: "/erp_supply_chain",
							label: "Supply Chain",
							icon: Icons.supply,
						},
						{ to: "/erp_inventory", label: "Inventory", icon: Icons.warehouse },
					],
					icon: Icons.operations,
				},
			],
		},
		{
			title: "FINTECH SOFTWARE",
			links: [
				{ to: "/fintech_dashboard", label: "Dashboard", icon: Icons.dashboard },
				{ to: "/fintech_transactions", label: "Transactions", icon: Icons.transaction },
			],
			dropdowns: [
				{
					title: "Accounts",
					links: [
						{
							to: "/fintech_customer_accounts",
							label: "Customer Accounts",
							icon: Icons.account,
						},
						{
							to: "/fintech_loan_management",
							label: "Loan Management",
							icon: Icons.loan,
						},
						{ to: "/fintech_savings", label: "Savings", icon: Icons.savings },
					],
					icon: Icons.account,
				},
				{
					title: "Payments",
					links: [
						{
							to: "/fintech_payment_gateway",
							label: "Payment Gateway",
							icon: Icons.gateway,
						},
						{ to: "/fintech_settlement", label: "Settlement", icon: Icons.invoice },
						{ to: "/fintech_compliance", label: "Compliance", icon: Icons.contract },
					],
					icon: Icons.cash,
				},
			],
		},
		{
			title: "LOGISTICS SOFTWARE",
			links: [
				{ to: "/logistics_dashboard", label: "Dashboard", icon: Icons.dashboard },
				{ to: "/logistics_analytics", label: "Analytics", icon: Icons.chart_dots },
			],
			dropdowns: [
				{
					title: "Fleet Management",
					links: [
						{
							to: "/logistics_vehicle_tracking",
							label: "Vehicle Tracking",
							icon: Icons.truck,
						},
						{
							to: "/logistics_maintenance",
							label: "Maintenance",
							icon: Icons.maintenance,
						},
						{ to: "/logistics_routes", label: "Routes", icon: Icons.route },
					],
					icon: Icons.drone,
				},
				{
					title: "Shipments",
					links: [
						{
							to: "/logistics_new_shipment",
							label: "New Shipment",
							icon: Icons.plus,
						},
						{
							to: "/logistics_shipment_history",
							label: "Shipment History",
							icon: Icons.history,
						},
						{ to: "/logistics_tracking", label: "Tracking", icon: Icons.location },
					],
					icon: Icons.truck,
				},
			],
		},
		{
			title: "CUSTOMER SUPPORT SYSTEM",
			links: [
				{ to: "/support_dashboard", label: "Dashboard", icon: Icons.dashboard },
				{ to: "/support_reports", label: "Reports", icon: Icons.reports },
			],
			dropdowns: [
				{
					title: "Tickets",
					links: [
						{
							to: "/support_open_tickets",
							label: "Open Tickets",
							icon: Icons.ongoing,
						},
						{
							to: "/support_resolved_tickets",
							label: "Resolved Tickets",
							icon: Icons.finished,
						},
						{
							to: "/support_ticket_categories",
							label: "Ticket Categories",
							icon: Icons.category,
						},
					],
					icon: Icons.ticket,
				},
				{
					title: "Customer Management",
					links: [
						{
							to: "/support_customer_profiles",
							label: "Customer Profiles",
							icon: Icons.double_user,
						},
						{ to: "/support_feedback", label: "Feedback", icon: Icons.feedback },
						{
							to: "/support_escalations",
							label: "Escalations",
							icon: Icons.escalation,
						},
					],
					icon: Icons.users,
				},
			],
		},
		{
			title: "DIGITAL AUTOMATION MARKETING SUITE",
			links: [
				{ to: "/marketing_dashboard", label: "Dashboard", icon: Icons.dashboard },
				{ to: "/marketing_campaigns", label: "Campaigns", icon: Icons.chart_line },
			],
			dropdowns: [
				{
					title: "Content",
					links: [
						{
							to: "/marketing_content_creation",
							label: "Content Creation",
							icon: Icons.plus,
						},
						{
							to: "/marketing_content_library",
							label: "Content Library",
							icon: Icons.library,
						},
						{
							to: "/marketing_audience_targeting",
							label: "Audience Targeting",
							icon: Icons.users,
						},
					],
					icon: Icons.content,
				},
				{
					title: "Analytics",
					links: [
						{
							to: "/marketing_performance",
							label: "Performance",
							icon: Icons.activity,
						},
						{
							to: "/marketing_conversion_rates",
							label: "Conversion Rates",
							icon: Icons.arrow_left_right,
						},
						{ to: "/marketing_reports", label: "Reports", icon: Icons.reports },
					],
					icon: Icons.chart_dots,
				},
			],
		},
	];

	const [isCollapsed, setIsCollapsed] = useState(false);
	const toggleSidebar = () => setIsCollapsed((prev) => !prev);

	return (
		<Router>
			<Routes>
				{/* Pages that need Sidebar and Header */}

				{/* Inventory System */}
				
				<Route
					path="/inventory/dashboard"
					element={
						<MainLayout
							isCollapsed={isCollapsed}
							toggleSidebar={toggleSidebar}
							groups={groups}
						>
							<InventoryDashboard />
						</MainLayout>
					}
				/>
				
				<Route
					path="/inventory/reports"
					element={
						<MainLayout
							isCollapsed={isCollapsed}
							toggleSidebar={toggleSidebar}
							groups={groups}
						>
							<InventoryReports />
						</MainLayout>
					}
				/>
				<Route
					path="/inventory/add_stock"
					element={
						<MainLayout
							isCollapsed={isCollapsed}
							toggleSidebar={toggleSidebar}
							groups={groups}
						>
							<InventoryNewStock />
						</MainLayout>
					}
				/>
				
				<Route
					path="/inventory/suppliers"
					element={
						<MainLayout
							isCollapsed={isCollapsed}
							toggleSidebar={toggleSidebar}
							groups={groups}
						>
							<InventorySuppliers />
						</MainLayout>
					}
				/>

				<Route
					path="/inventory/view_stock"
					element={
						<MainLayout
							isCollapsed={isCollapsed}
							toggleSidebar={toggleSidebar}
							groups={groups}
						>
							<InventoryViewStock />
						</MainLayout>
					}
				/>
				
				<Route
					path="/inventory/new_order"
					element={
						<MainLayout
							isCollapsed={isCollapsed}
							toggleSidebar={toggleSidebar}
							groups={groups}
						>
							<InventoryNewOrder/>
						</MainLayout>
					}
				/>
				<Route
					path="/inventory/order_history"
					element={
						<MainLayout
							isCollapsed={isCollapsed}
							toggleSidebar={toggleSidebar}
							groups={groups}
						>
							<InventoryOrderHistory />
						</MainLayout>
					}
				/>
				
				<Route
					path="/inventory/returns"
					element={
						<MainLayout
							isCollapsed={isCollapsed}
							toggleSidebar={toggleSidebar}
							groups={groups}
						>
							<InventoryReturns />
						</MainLayout>
					}
				/>

				{/* MISC */}
				<Route
					path="/"
					element={
						<MainLayout
							isCollapsed={isCollapsed}
							toggleSidebar={toggleSidebar}
							groups={groups}
						>
							<Dashboard />
						</MainLayout>
					}
				/>
				<Route
					path="/resultats"
					element={
						<MainLayout
							isCollapsed={isCollapsed}
							toggleSidebar={toggleSidebar}
							groups={groups}
						>
							<Resultats />
						</MainLayout>
					}
				/>
				<Route
					path="/settings"
					element={
						<MainLayout
							isCollapsed={isCollapsed}
							toggleSidebar={toggleSidebar}
							groups={groups}
						>
							<Resultats />
						</MainLayout>
					}
				/>
				<Route
					path="/logout"
					element={
						<MainLayout
							isCollapsed={isCollapsed}
							toggleSidebar={toggleSidebar}
							groups={groups}
						>
							<Resultats />
						</MainLayout>
					}
				/>
				<Route
					path="/ecommerce"
					element={
						<MainLayout
							isCollapsed={isCollapsed}
							toggleSidebar={toggleSidebar}
							groups={groups}
						>
							<DB_Ecommerce />
						</MainLayout>
					}
				/>

				{/* Pages that do not need Sidebar */}
				<Route
					path="/login"
					element={
						<NoSidebarLayout>
							<Login />
						</NoSidebarLayout>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
