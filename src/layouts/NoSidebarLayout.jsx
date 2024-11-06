function NoSidebarLayout({ children }) {
	return (
		<div className="no-sidebar-layout">
			<main className="main">{children}</main>
		</div>
	);
}

export default NoSidebarLayout;
