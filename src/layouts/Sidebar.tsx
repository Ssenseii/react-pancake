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
	isCollapsed: boolean;
}

const arrowIcon = (isOpen: boolean) => (
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

const SidebarLink: FC<LinkItem> = ({ to, label, icon }) => (
	<NavLink
		to={to}
		className={({ isActive }) => `sidebar__group-link ${isActive ? "active" : ""}`}
	>
		{icon && <span className="icon">{icon}</span>}
		<span className="label">{label}</span>
	</NavLink>
);

const SidebarDropdown: FC<DropdownItem> = ({ title, links, icon }) => {
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

const SidebarGroup: FC<Group> = ({ title, links, dropdowns }) => (
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

const Sidebar: FC<SidebarProps> = ({ groups, isCollapsed }) => {

	return (
		<div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
			{groups.map((group) => (
				<SidebarGroup key={group.title} {...group} />
			))}
		</div>
	);
};

export default Sidebar;
