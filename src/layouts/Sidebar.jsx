import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

import Icons from "../assets/icons";


const arrowIcon = (isOpen) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M6 9l6 6l6-6" transform={isOpen ? "rotate(180, 12, 12)" : ""} />
	</svg>
);

const SidebarLink= ({ to, label, icon }) => (
	<NavLink
		to={to}
		className={({ isActive }) => `sidebar__group-link ${isActive ? "active" : ""}`}
	>
		{icon && <span className="icon">{icon}</span>}
		<span className="label">{label}</span>
	</NavLink>
);

const SidebarDropdown = ({ title, links, icon }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="sidebar__group-dropdown">
			<button onClick={() => setIsOpen(!isOpen)} className="dropdown-toggle">
				{icon && <span className="icon">{icon}</span>}
				<span className="label">{title}</span>
				{arrowIcon(isOpen)}
			</button>
			{isOpen && (
				<div className="sidebar__group-dropdown-menu">
					{links.map((link) => (
						<SidebarLink key={link.to} {...link} />
					))}
				</div>
			)}
		</div>
	);
};

const SidebarGroup = ({ title, links, dropdowns }) => (
	<div className="sidebar__group">
		<h3>{title}</h3>
		<div>
			{links.map((link) => (
				<SidebarLink key={link.to} {...link} />
			))}
			{dropdowns.map((dropdown) => (
				<SidebarDropdown key={dropdown.title} {...dropdown} />
			))}
		</div>
	</div>
);

const Sidebar = ({ groups, isCollapsed }) => {

	return (
		<div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
			{groups.map((group) => (
				<SidebarGroup key={group.title} {...group} />
			))}

			<div className="sidebar__bottom-links">
				<SidebarLink to="/settings" label="Settings" icon={Icons.settings} />
				<SidebarLink to="/logout" label="Logout" icon={Icons.connect} />
			</div>
		</div>
	);
};

export default Sidebar;
