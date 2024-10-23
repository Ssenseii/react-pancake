import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";

import "./style/style.scss";

import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";

import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {
	// const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

	return (
		<Router>
			<div className="main-app">
				<div className="col-xs-12">
					<Header />
				</div>

				<div className="row no-gutters w-full">
					<div className="col-xs-2">
						<Sidebar />
					</div>

					<main className="main col-xs-10 ">
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
