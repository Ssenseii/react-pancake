import Header from "./Header";
import Sidebar from "./Sidebar";

function MainLayout({ children, isCollapsed, toggleSidebar, groups }) {
	return (
		<div className="main-app">
			<div className="col-xs-12">
				<Header toggleSidebar={toggleSidebar} />
			</div>

			<div className="main-app__container">
				<Sidebar groups={groups} isCollapsed={isCollapsed} />
				<main className="main">{children}</main>
			</div>
		</div>
	);
}

export default MainLayout;
