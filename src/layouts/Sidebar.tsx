import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
	return (
		<div className="sidebar">
			<NavLink to="/" end>
				Dashboard
			</NavLink>
			<NavLink to="/users">Users</NavLink>
			<NavLink to="/profile">profile</NavLink>
		</div>
	);
};

export default Sidebar;
