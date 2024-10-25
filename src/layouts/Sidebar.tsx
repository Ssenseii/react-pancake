import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

// Types
interface LinkItem {
	to: string;
	label: string;
	icon?: React.ReactNode;
}

interface DropdownItem {
	title: string;
	links: LinkItem[];
	icon?: React.ReactNode;
}

interface Group {
	title: string;
	links: LinkItem[];
	dropdowns: DropdownItem[];
}

interface SidebarProps {
	groups: Group[];
}

const arrow_up = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M6 15l6 -6l6 6" />
		</svg>
	);
};

const arrow_down = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M6 9l6 6l6 -6" />
		</svg>
	);
};

// Link Component
const SidebarLink: FC<LinkItem> = ({ to, label, icon }) => (
	<NavLink
		to={to}
		style={({ isActive }) => ({
			color: isActive ? "var(--accent)" : "",
		})}
		className="sidebar__group-link"
	>
		{icon && <span className="icon">{icon}</span>}
		{label}
	</NavLink>
);

// Dropdown Component
const SidebarDropdown: FC<DropdownItem> = ({ title, links, icon }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className="sidebar__group-dropdown">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={isOpen ? "menu-open" : "menu-closed"}
			>
				{icon && <span className="icon">{icon}</span>}
				{title} {isOpen ? arrow_up() : arrow_down()}
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

// Group Component
const SidebarGroup: FC<Group> = ({ title, links, dropdowns }) => (
	// <div style={{ marginBottom: "16px" }}>
	<div className="sidebar__group">
		<h3>{title}</h3>
		<div>
			{dropdowns.map((dropdown) => (
				<SidebarDropdown key={dropdown.title} {...dropdown} />
			))}
			{links.map((link) => (
				<SidebarLink key={link.to} {...link} />
			))}
		</div>
	</div>
);

// Sidebar Component
const Sidebar: FC<SidebarProps> = ({ groups }) => (
	// <div style={{ width: "250px", padding: "16px", borderRight: "1px solid #ccc" }}>
	<div className="sidebar col-xs-2 col-md-12">
		{groups.map((group) => (
			<SidebarGroup key={group.title} {...group} />
		))}
	</div>
);

export default Sidebar;
