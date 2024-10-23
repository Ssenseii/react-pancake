import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/style.scss";

import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";

import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<Router>
      <Header />
      <Sidebar />
			<main>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      </main>
		</Router>
	);
}

export default App;
